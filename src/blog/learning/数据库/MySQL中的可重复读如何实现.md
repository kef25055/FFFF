---
title: MySQL中的可重复读如何实现
categories:
  - 数据库
tags:
  - MySQL
  - 可重复读
order: 2
---

# MySQL中的可重复读如何实现

## MVCC
- MVCC，多版本并发控制，用于实现**读已提交**和**可重复读**隔离级别。
- MVCC 的核心就是 Undo log 多版本链 + ReadView，
  "MV" 就是通过 Undo log 来保存数据的历史版本，实现多版本的管理，
  "CC" 是通过 ReadView 来实现管理，通过 ReadView 原则来决定数据是否显示。
  同时针对不同的隔离级别，ReadView 的生成策略不同，也就实现了不同的隔离级别。

## Undo log 多版本链
每条数据都有两个隐藏字段：
- `trx_id`:事务 id，记录最近一次更新这条数据的事务 id
- `roll_pointer`:回滚指针，指向之前生成的 undo log

![](https://github.com/kef25055/Typoraimg/blob/main/blog/learning/%E6%95%B0%E6%8D%AE%E5%BA%93/1.png?raw=true)

每一条数据都有多个版本，版本之间通过 undo log 链条进行连接。

## ReadView
ReadView 是 InnoDB 在实现 MVCC 时用到的一致性读视图，即 consistant read view，
用于支持 RC(Read Committed 读提交) 和 RR(Repeatable Read 可重复读) 隔离级别的实现。

ReadView 简单理解就是对数据在某个时刻的状态记录下来。之后获取某时刻的数据就是还原记录的状态，是不会变的。

ReadView 中比较重要的字段有 4 个：
- `m_ids`：用来表示 MySQL 中哪些事务正在执行，但是没有提交。
- `min_trx_id`：就是 `m_ids` 里最小的值。
- `max_trx_id`：**下一个**要生成的事务 id 值，也就是最大事务 id。
- `creator_trx_id`：当前事务 id。

当一个事务第一次执行查询 sql 时，会生成一致性视图 read-view（快照），
查询时从 undo log 中最新的一条记录开始跟 read-view 做对比。
如果不符合比较规则，就根据回滚指针回滚到上一条记录继续比较，直到得到符合条件的查询结果。

**ReadView 判断记录某个版本是否可见的规则如下：**

![](https://github.com/kef25055/Typoraimg/blob/main/blog/learning/%E6%95%B0%E6%8D%AE%E5%BA%93/2.png?raw=true)

- 如果当前记录的事务 id 落在左侧部分，表示这个版本已经是已提交的事务生成的，可读。
- 如果当前记录的事务 id 落在右侧部分，表示这个版本是由将来启动的事务生成的，不可读。
- 如果当前记录的事务 id 落在中间部分，则分为两种情况：
  - 若当前记录的事务 id 在未提交事务的数组中，则此条记录不可读。
  - 若当前记录的事务 id 不在未提交事务的数组中，则此条记录可读。

RC 和 RR 隔离级别都是由 MVCC 实现，区别在于：
- RC 隔离级别中，read-view 是每次执行  select 语句时都生成一个
- RR 隔离级别中，read-view 是在第一次执行 select 语句时生成一个，同一事务中后面的所有 select 语句都复用这个 read-view