# SmartPark-wechat-client
## 智慧园区微信小程序

:smiley: 👍

#### 这是学习小程序时简单做的一个小项目使用了CorlorUI GA作为css库和组件库，这里只有前端页面，它的正常工作如图片加载之类的需要一个后端，具体的接口在 API.js当中
*这个项目是一个初学的项目，所以性能什么的非常烂，图片的存储全靠图床，~所以图床要是寄了，就什么都看不到了~*


## 具体的界面展示
### 首页
[![pPU9NCT.png](https://s1.ax1x.com/2023/08/27/pPU9NCT.png)](https://imgse.com/i/pPU9NCT)

### 个人中心
[![pPU9U8U.png](https://s1.ax1x.com/2023/08/27/pPU9U8U.png)](https://imgse.com/i/pPU9U8U)

#### 商城和活动页面没有时间去实现，所以运行起来都是死的页面

## 具体实现的功能模块有：
党建模块 &#9745; 具体文章页面 &#9745; 

[![pPU9dv4.png](https://s1.ax1x.com/2023/08/27/pPU9dv4.png)](https://imgse.com/i/pPU9dv4)

### 政策研读  &#9745; 

[![pPU9sV1.png](https://s1.ax1x.com/2023/08/27/pPU9sV1.png)](https://imgse.com/i/pPU9sV1)

#### 申报辅导 	&#10004; 不完全实现，文章的具体页面没有写，死数据

[![pPU9yUx.png](https://s1.ax1x.com/2023/08/27/pPU9yUx.png)](https://imgse.com/i/pPU9yUx)

#### 工商注册 包含子模块 入园企业注册（表单，忘记写验证了）/注册列表查询 &#9745;  

可以使用文件上传功能，具体在后端设置上传的服务器minio/阿里云OSS，这里使用本地存储

[![pPU9gPK.png](https://s1.ax1x.com/2023/08/27/pPU9gPK.png)](https://imgse.com/i/pPU9gPK)

#### 快速保修 &#9745;

本来也要写的图片上传的，没时间了一个礼拜左右边学边做的，就没写了

这里写了简单的表单验证，使用了 WX.validate.js, 来自[wx-extend](https://github.com/wux-weapp/wx-extend)的插件,好用记得给他们一个star

[![pPU9Oxg.png](https://s1.ax1x.com/2023/08/27/pPU9Oxg.png)](https://imgse.com/i/pPU9Oxg)

### ~剩下的模块都没写~ :sob: :sob: :sob:

个人中心的内容较少，使用微信的API一键登录，主要麻烦的是头像昵称获取，学习看的视频是用旧的接口 wx.getUserProfile 就会返回用户信息，直接用setData填进去就是了

### ~但腾讯的团队向来吃饱了没事干, 喜欢改接口~  :sweat_smile:  :sweat_smile:  :sweat_smile:

新版的基础库返回的全是空，说是保护隐私，用新的昵称头像填写能力，具体也实现了，就是得绕着写的感觉很不爽

剩下也没多少东西了，虽然时间较短，但是在学习小程序开发的过程感受到，学的越多，对这玩意的厌恶感越深 :sweat: :sweat_smile:

# 暴论 :yum: ：~小程序这他妈就不是给人用，开发的时候一坨 💩，用户用也是一坨 💩~ :sweat_smile: :sweat_smile: :sweat_smile:

