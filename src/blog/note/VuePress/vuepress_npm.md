---
title: 使用VuePress搭建个人博客
tags:
  - VuePress
---


##  准备工作

### 1.下载Node.js

下载地址：[node.js](https://nodejs.org/en/)

### 2.添加两个文件夹

在安装路径的根目录下新建 **node_cache** 和 **node_global** 文件夹

![nodejs](/blog/note/nodejs.png)

### 3.环境变量

- 在**系统变量**里新建 **NODE_HOME** ,变量值为刚刚的安装路径 **D:\Nodejs**

- 在**系统变量**的 **path** 中添加:

   **%NODE_HOME%** 

   **%NODE_HOME%node_cache** 

   **%NODE_HOME%node_global**

- 将**用户变量**的 **path** 中默认的 **C:\User\35025\AppDate\Roaming\npm** 改为 **node_global** 的路径 **D:\Nodejs\node_global**

注：在 cmd 窗口输入 `node -v` 和 `npm -v` ,能够正确显示版本号说明安装成功

### 4.修改缓存目录和全局目录

用**管理员模式**打开 cmd 窗口执行以下指令

- 设置缓存到 **node_cache** 文件夹：

  `npm config set cache "D:\Nodejs\node_cache"`

- 设置全局模块的安装路径到 **node_global** 文件夹：

  `npm config set prefix "D:\Nodejs\node_global"`

## 搭建项目

### 1.初始化项目

使用 vuepress-theme-hope 主题提供的脚手架工具创建项目

- 用**管理员模式**打开 cmd 窗口

- 切换到想要放置项目的路径

  例如要切换到 E:\Project ，执行 `e:` 切换到 E 盘，执行 `cd Project` 进入 Project 目录

- 执行以下命令：

  `npm init vuepress-theme-hope blogs`

  <!--这里的 blogs 是你项目所在的文件夹名称，可以换-->

- 选择包管理器 **npm** 

- 设置协议 **MIT**

- 项目需要用到多语言么 **NO**

- 你想要创建什么类型的项目 **docs**

- 是否需要一个自动部署文档到 GitHub Pages 的工作流 **YES**

- 选择你想使用的源 **当前源**

### 2.安装依赖

由于一个个安装容易导致依赖冲突，所以直接一步到位

- 打开刚刚下载下来的 blogs 文件夹，修改 **src 目录下的 package.json** 文件为以下内容

  ```json
  {
    "name": "vuepress-theme-hope-template",
    "description": "A project of vuepress-theme-hope",
    "version": "2.0.0",
    "license": "MIT",
    "type": "module",
    "scripts": {
      "docs:build": "vuepress-vite build src",
      "docs:clean-dev": "vuepress-vite dev src --clean-cache",
      "docs:dev": "vuepress-vite dev src",
      "docs:update-package": "npx vp-update"
    },
    "devDependencies": {
      "@types/katex": "0.16.7",
      "@vue/repl": "4.4.2",
      "@vuepress/bundler-vite": "2.0.0-rc.15",
      "@vuepress/bundler-webpack": "2.0.0-rc.15",
      "@vuepress/helper": "2.0.0-rc.47",
      "@vuepress/plugin-feed": "2.0.0-rc.47",
      "@vuepress/plugin-revealjs": "2.0.0-rc.48",
      "@vueuse/core": "11.1.0",
      "@waline/client": "^3.3.2",
      "artplayer": "5.1.7",
      "echarts-wordcloud": "2.1.0",
      "flowchart.ts": "3.0.1",
      "katex": "0.16.11",
      "kotlin-playground": "1.30.0",
      "markmap-lib": "0.17.0",
      "markmap-toolbar": "0.17.0",
      "markmap-view": "0.17.0",
      "mermaid": "11.2.1",
      "sandpack-vue3": "3.1.11",
      "sass-embedded": "1.79.3",
      "sass-loader": "16.0.2",
      "vue": "3.5.8",
      "vuepress": "2.0.0-rc.15",
      "vuepress-plugin-components": "2.0.0-rc.54",
      "vuepress-plugin-md-enhance": "2.0.0-rc.54",
      "vuepress-plugin-search-pro": "^2.0.0-rc.54",
      "vuepress-shared": "2.0.0-rc.54",
      "vuepress-theme-hope": "2.0.0-rc.56"
    }
  }
  ```

  **"devDependencies"** 里面的内容不要改，直接复制粘贴就好

- 用**管理员模式**在**项目根目录**执行`npm install`，等待自动下载

- 下载完成后执行 `npm run docs:dev` 即可在本地打开博客

  <!--执行过程中出现 vuepress-theme-hope:  ✖ @vuepress/plugin-redirect is not installed! 的报错是正常的，不需要管，也不要下载这个插件--> 

## 部署到Github

