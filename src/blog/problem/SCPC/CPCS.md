---
title: CPCS
categories:
  - 题目
tags:
  - 动态规划
order: 4
---

# CPCS

## 简要题面

给定两个串a，b，求a串中有几个子序列是b串

## 题面

在被成功破解上一个宝箱密码后，小鸡大惊失色，连夜更换了密码的生成规则，并重新将宝箱锁好，信心十足地摆在了所有参赛者面前。

这一次，解锁线索更加复杂——宝箱表面刻着两串**小写字母 a 和 b**，并附言：***“若你能算清 a 中有多少子序列等于 b，我便甘拜下风！”***

现在，宝箱的最终命运掌握在你手中！

**注：子序列是指通过从原始序列中删除某些元素（可能一个、多个或不删除）但不改变剩余元素的相对位置所形成的新序列，例如 $sacpc$ 通过删除元素 $a$ 可以得到子序列  $scpc$ 。**

## 输入描述

第一行一个字符串 $a(1 \le \lvert a \rvert \le 10^5)$

第二行一个字符串 $b(1 \le \lvert b \rvert \le 10^3)$

## 输出描述

一行一个数字表示答案

由于答案可能过大，请对$998244353$ ****取模

## 输入输出样例

### 输入 #1

```
scppcsscpspccsp
scpc
```

### 输出 #1

```
28
```

## 说明/提示

## 解法

### **定义状态**

令 `dp[i]` 表示 `a` 处理到当前字符时，以 `b[i]` 结尾的匹配子序列个数。

### **转移方程**

- 维护 `dp` 数组，其中 `dp[j]` 代表当前在 `a` 中匹配 `b` 的第 `j` 个字符的子序列数量。
- 遍历 `a` 中的每个字符 `a[i]`：
    - 如果 `a[i] == b[j]`，则 `dp[j]` 可以由 `dp[j-1]` 贡献而来，即 `dp[j] += dp[j-1]`。
    - 若 `a[i]` 恰好等于 `b[0]`，则 `dp[0]` 自增，即 `dp[0] += 1`。
- 采用**倒序更新 `dp[j]`**，避免更新 `dp[j]` 时影响 `dp[j-1]` 的值。

## 参考程序

```cpp
#include<bits/stdc++.h>
using namespace std;
typedef long long ll;
const ll mod=998244353;
ll dp[1005];
vector<int>vec[30];
int main(){
    ios::sync_with_stdio(0),cin.tie(0),cout.tie(0);
    string a,b;
    cin>>a>>b;
    for(int i=1;i<b.size();i++){
        vec[b[i]-'a'].push_back(i);
    }
    for(int i=0;i<='z'-'a';i++){
        sort(vec[i].begin(),vec[i].end(),greater<int>());
    }
    for(int i=0;i<a.size();i++){
        for(auto j:vec[a[i]-'a']){
            dp[j]=(dp[j-1]+dp[j])%mod;
        }
        if(a[i]==b[0]) dp[0]=(dp[0]+1)%mod;
    }
    cout<<dp[b.size()-1]<<'\n';
    return 0;
}
```