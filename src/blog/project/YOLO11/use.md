---
title: 使用YOLO11训练模型
categories:
  - YOLO11
order: 2
---

## 📌数据集

### 🔥免费数据集网站 —— Roboflow

进入[Roboflow官网](https://roboflow.com/)，注册登录后进入如下页面，点击下图所示位置

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/1.png?raw=true)

进入当前页面搜索自己想要的数据集

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/2.png?raw=true)

选择一个合适的数据集，点击图示位置进入下载

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/3.png?raw=true)

选择yolov11格式的数据集

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/4.png?raw=true)

下载zip格式的数据集

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/5.png?raw=true)

### 🔥导入数据集

在项目根目录下新建一个文件夹用来存放导入的数据集，这里使用 `dataset` 作为存放所有数据集的路径，刚刚下载的数据集解压到 `dataset` 的 `uno` 路径下

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/6.png?raw=true)

打开 `data.yaml` 文件并修改对应信息

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/7.png?raw=true)

> 增加 `path: E:/Download/ultralytics-main/ultralytics-main`，路径为项目根目录
>
> `train` 、 `val` 、 `test` 缺省部分修改为存放该数据集的路径
> 
> 注释掉 `roboflow:` 以下内容

## 📌模型训练

### 🔥训练代码

在项目根目录下新建 `train.py` 文件
```python
from ultralytics import YOLO
if __name__ == '__main__':
    model = YOLO('ultralytics/cfg/models/11/yolo11.yaml')
    model.load('runs/detect/train16/weights/best.pt')
    results = model.train(
        data='dataset/uno/data.yaml',
        epochs=100,
        imgsz=640,
        cache=False,
        batch=16,
        device='0',
        single_cls=False,
        amp=True
        )
```

::: info 各参数信息

`model.load()` ：加载预训练模型，这里加载是的上一次训练了100轮的模型，如果不需要可以去掉

`data` ：数据集配置文件的路径

`epochs` ：训练轮数

`imgsz` ：输入图像的尺寸，一般指定为 640*640 像素

`cache` ：表示是否缓存数据，将数据缓存到内存中可以加速训练，但占用更多内存

`batch` ：批处理大小，根据自己电脑性能设置

`device` ：训练使用的设备，'0' 表示使用第一个 GPU（若为 'cpu' 则表示使用 CPU）

`single_cls` ：是否为单类别检测，False 表示多类别检测，True 表示单类别检测

`amp` ：是否启用自动混合精度训练（Automatic Mixed Precision），True 表示启用 AMP，有助于加速训练并节省显存

还有一些参数没有列出来，可以自行搜索

:::

直接运行代码，等待训练完成，默认训练结果会保存在 `runs/detect` 路径下

### 🔥测试代码

在项目根目录下新建 `test.py` 文件
```python
from ultralytics import YOLO

if __name__ == '__main__':
    # 加载模型
    model = YOLO(model=r'runs/detect/train17/weights/best.pt') #加载刚刚训练完的模型
    # 进行推理
    model.predict(source=r'dataset/uno/test/images/IMG_20241104_120135_jpg.rf.1aa0dc9a8d69f838ea9e725080b5d2b8.jpg',  # source是要推理的图片路径这里使用数据集提供的图片
                  save=True,  # 是否在推理结束后保存结果
                  show=True,  # 是否在推理结束后显示结果
                  project='runs/detect',  # 结果的保存路径
                  )
```

直接运行代码，进入 `runs/detect` 文件夹查看训练结果

![](https://github.com/kef25055/Typoraimg/blob/main/blog/project/YOLO11/8.png?raw=true)