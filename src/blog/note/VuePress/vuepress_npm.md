---
title: 使用VuePress搭建个人博客
categories:
  - VuePress
#tags:
#  - VuePress
---

##  📌准备工作

### 🔥下载Node.js

下载地址：[node.js](https://nodejs.org/en/)

### 🔥添加两个文件夹

在安装路径的根目录下新建 **node_cache** 和 **node_global** 文件夹

![](https://github.com/kef25055/Typoraimg/blob/main/blog/note/Vuepress/nodejs.png?raw=true)

### 🔥环境变量

- 在**系统变量**里新建 `NODE_HOME` ,变量值为刚刚的安装路径 `D:\Nodejs`

- 在**系统变量**的 **path** 中添加:

   `%NODE_HOME%` 

   `%NODE_HOME%node_cache` 

   `%NODE_HOME%node_global`

- 将**用户变量**的 **path** 中默认的 `C:\User\35025\AppDate\Roaming\npm` 改为 **node_global** 的路径 `D:\Nodejs\node_global`

   > 在 cmd 窗口输入 `node -v` 和 `npm -v` ,能够正确显示版本号说明安装成功

### 🔥修改缓存目录和全局目录

用**管理员模式**打开 cmd 窗口执行以下指令

- 设置缓存到 **node_cache** 文件夹：

  ```shell
  npm config set cache "D:\Nodejs\node_cache"
  ```

  

- 设置全局模块的安装路径到 **node_global** 文件夹：

  ```shell
  npm config set prefix "D:\Nodejs\node_global"
  ```
  
  

## 📌搭建项目

### 🔥初始化项目

使用 vuepress-theme-hope 主题提供的脚手架工具创建项目

- 用**管理员模式**打开 cmd 窗口

- 切换到想要放置项目的路径

  例如要切换到 E:\Project ，执行 `e:` 切换到 E 盘，执行 `cd Project` 进入 Project 目录

- 执行以下命令：

  ```shell
  npm init vuepress-theme-hope blogs
  ```

  > 这里的 blogs 是你项目所在的文件夹名称，可以换

- 选择一些默认的配置：

  > 选择包管理器 **npm** 
  >
  > 设置协议 **MIT**
  >
  > 项目需要用到多语言么 **NO**
  >
  > 你想要创建什么类型的项目 **docs**
  >
  > 是否需要一个自动部署文档到 GitHub Pages 的工作流 **YES**
  >
  > 选择你想使用的源 **当前源**

### 🔥安装依赖

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

  > **"devDependencies"** 里面的内容不要改，直接复制粘贴就好

- 用**管理员模式**在**项目根目录**执行以下命令，等待自动下载：

  ```shell
  npm install
  ```

- 下载完成后执行以下命令即可在本地打开博客：

  ```shell
  npm run docs:dev
  ```
  
  > 执行过程中出现 vuepress-theme-hope:  ✖ @vuepress/plugin-redirect is not installed! 的报错是正常的，不需要管，也不要下载这个插件

## 📌部署到Github

### 🔥新建仓库

+ 如果使用的仓库名与用户名不相同，需要修改 src 目录下 config.ts 文件中的 base 路径信息为：

  ```shell
  base: "/你的仓库名/",
  ```

  > 新建仓库的时候**不要**创建 README.md 文件

### 🔥推送代码到Github

+ 首先测试一下，当前能不能正确的静态部署

  ```shell
  npm run docs:build
  ```

+ 初始化 Git 仓库

  ```shell
  git init
  ```

+ 连接到远程仓库

  ```shell
  git remote add origin 你的仓库地址
  ```

+ 将当前目录下的所有更改（包括新增、修改或删除的文件）添加到暂存区，准备进行下一次提交

  ```shell
  git add .
  ```

  > 如果出现有关CRLF、LF之类换行符的报错，执行以下命令之一：
  >
  > ```shell
  > git config --global core.autocrlf true
  > ```
  >
  > ```shell
  > git add --renormalize .
  > ```

+ 将当前暂存区中的更改提交到本地 Git 仓库

  ```shell
  git commit -m "提交信息"
  ```

+ 将本地 Git 仓库中的更改推送到远程仓库

  ```shell
  git push origin main
  ```

  > 这里的 main 是本地分支名称，如果本地分支不是 main 自行修改，本地分支名称可以在这里查看：
  >
  > ![](https://github.com/kef25055/Typoraimg/blob/main/blog/note/Vuepress/git.png?raw=true)

### 🔥使用 Github Pages 发布站点

上一步完成推送后，应该会自动生成 gh-pages 分支，前往 GitHub 仓库的设置页面，选择 `gh-pages` 作为 GitHub Pages 的源。

![](https://github.com/kef25055/Typoraimg/blob/main/blog/note/Vuepress/pages.png?raw=true)

等待自动部署完成后在当前页面即可访问站点。
