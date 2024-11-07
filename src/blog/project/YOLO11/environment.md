---
title: YOLO11环境配置
categories:
  - YOLO11
#tags:
#  - yolo11
---

::: info
本教程适用于有独立显卡的电脑
:::

## 📌安装所需软件

### 🔥Anacoda3

Anaconda3由于是国外网站下载较慢，推荐通过[清华镜像源](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/?C=M&O=D)安装。

选择带有 `Anaconda3...Windows...exe` 字样的进行下载。

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/Anaconda3.png?raw=true)

下载完成之后打开Anaconda3进行安装，一直点下一步，选 `Just Me` 

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/justme.png?raw=true)

安装路径不建议安装到 C 盘，可以直接复制粘贴修改到 `D:\Anaconda3` ,也可以修改到其他路径，最好纯英文路径。

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/Browse.png?raw=true)

点击下一步后，需要选择添加到环境变量，直接全选安装即可。


### 🔥Pycharm

安装Pycharm可以直接去[官网](https://www.jetbrains.com/zh-cn/pycharm/download/?section=windows)下载，速度较快。

往下滑，下载免费的社区版就够用了

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/Pycharm.png?raw=true)

下载完成后开始安装，一直点下一步，将**安装路径**换成**C盘以外的其他文件夹**

## 📌安装环境

### 🔥CUDA

::: tip 提示
下载CUDA前需要先查看显卡支持的CUDA版本最高是多少
:::

按下 `win+R` ，输入 `cmd` 打开命令行，输入 `nvidia-smi` 即可查看

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/nvidiaversion.png?raw=true)

上图红框位置显示即为CUDA最高支持版本，本教程CUDA最高版本达到11.8即可，若没有达到则需要更新显卡驱动。

::: important 重要
PyTorch 官方目前主要支持 CUDA 12.1 和 CUDA 11.8，对于更高版本的支持可能较为有限，建议和本教程一致，直接安装 CUDA 11.8
:::

可以在[官网](https://developer.nvidia.com/cuda-toolkit-archive)挑选下载，也可以直接[点此下载](https://developer.download.nvidia.com/compute/cuda/11.8.0/local_installers/cuda_11.8.0_522.06_windows.exe)，选择**精简安装**即可

安装完成后打开cmd，输入 `nvcc -V`,如下图所示即安装成功

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/nvcc.png?raw=true)

### 🔥cuDNN

进入[cuDNN](https://developer.nvidia.com/rdp/cudnn-archive)官网，选择与CUDA相匹配版本，下载Windows版本的压缩包文件。。

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/cuDNN.png?raw=true)

将压缩包进行解压，解压后得到下图三个文件夹，全选复制进CUDA的文件夹中进行覆盖替换,替换完成后即cuDNN安装完成。

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/change.png?raw=true)

按照本教程下载的CUDA文件夹默认在 `C:\Program Files\NVIDIA GPU Computing Toolkit\CUDA\v11.8` 目录下。

## 📌安装环境

### 🔥创建虚拟环境
打开 Anaconda prompt,输入以下指令创建一个名为yolov11，python版本为3.10的虚拟环境。
```shell
conda create -n yolov11 python=3.10
```

### 🔥安装pytorch（GPU版）

打开 Anaconda prompt,输入以下指令进入yolov11环境
```shell
conda activate yolov11
```

输入下方命令即可安装pytorch,耐心等待安装完成（需要注意关闭加速软件否则会下载失败）
```shell
pip install torch==2.0.0+cu118 torchvision==0.15.1+cu118 --extra-index-url https://download.pytorch.org/whl/cu118
```

### 🔥安装ultralytics库

这个库包含了几乎全部运行yolov11所需的环境，输入以下命令后耐心等待即可
```shell
pip install ultralytics
```

## 📌源码及使用环境

### 🔥下载YOLO11源码

进入[源码地址](https://github.com/ultralytics/ultralytics/)进行下载。

首先下载源代码压缩包并解压

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/yolozip.png?raw=true)

下滑找到yolo11n.pt，点击下载

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/yolo11n.png?raw=true)

将下载的文件放到刚刚解压的源码根目录下

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/ultralvticsmain.png?raw=true)

### 🔥Pycharm导入环境

用Pycharm打开刚刚的项目源码，添加新的本地解释器

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/newyolov11.png?raw=true)

按下图选择环境后点击确定即可

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/yolov11.png?raw=true)

## 📌验证环境

在源码根目录下新建 `val.py` 文件
```python
from ultralytics import YOLO

if __name__ == '__main__':
    # 加载模型
    model = YOLO(model=r'yolo11n.pt')
    # 进行推理
    model.predict(source=r'ultralytics/assets/bus.jpg',  # source是要推理的图片路径这里使用yolo自带的图片
                  save=True,  # 是否在推理结束后保存结果
                  show=True,  # 是否在推理结束后显示结果
                  project='runs/detect',  # 结果的保存路径
                  )
```

运行后输出如下图即环境正常。

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/val.png?raw=true)

### 🔥NumPy版本问题

如果提示NumPy版本不兼容相关的错误
> 打开 Anaconda prompt ,进入 yolov11 环境
> ```shell
> conda activate yolov11
> ```
> 输入以下命令，安装1.23.5版本的NumPy
> ```shell
>pip install numpy==1.23.5
>``` 

使用以下命令可以查看当前的NumPy版本
```shell
pip show numpy
```