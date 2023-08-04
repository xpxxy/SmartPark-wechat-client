// pages/category/index.js
// 获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomBar: app.globalData.CustomBar,
    StatusBar: app.globalData.StatusBar,
    TabCur: 0,
    MainCur: 0,
    load: true,
    VerticalNavTop: 0,
    categoryList: [{
      "id": 0,
      "name": "居家用品",
      "banner": "http://nos.netease.com/yanxuan/f0d0e1a542e2095861b42bf789d948ce.jpg",
      "height": 155,
      "goodsList": [{
        "id": 1009024,
        "url": "http://yanxuan.nosdn.127.net/1f67b1970ee20fd572b7202da0ff705d.png",
        "isNew": 0,
        "goods_number": 22,
        "name": "日式和风懒人沙发",
        "price": 0.1
      }, {
        "id": 1086015,
        "url": "http://yanxuan.nosdn.127.net/d5c2ecfe0fb00cdd8b829975bab21a31.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "简约小台灯",
        "price": 9.9
      }, {
        "id": 1116032,
        "url": "http://yanxuan.nosdn.127.net/45176a783387751fc07a07f5031dd62c.png",
        "isNew": 0,
        "goods_number": 0,
        "name": "怀抱休闲椅组合",
        "price": 3499
      }, {
        "id": 1127052,
        "url": "http://yanxuan.nosdn.127.net/4f483526cfe3b953f403ae02049df5b9.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "纯棉水洗色织格夏凉被",
        "price": 169
      }, {
        "id": 1181000,
        "url": "http://yanxuan.nosdn.127.net/1f67b1970ee20fd572b7202da0ff705d.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "母亲节礼物-舒适安睡组合",
        "price": 999
      }, {
        "id": 1110003,
        "url": "http://yanxuan.nosdn.127.net/72dfb4bfc1cd1b834c064a9d1d40627d.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "全棉针织条纹四件套 新款",
        "price": 299
      }]
    }, {
      "id": 1,
      "name": "餐厨用具",
      "banner": "http://nos.netease.com/yanxuan/88855173a0cfcfd889ee6394a3259c4f.jpg",
      "height": 155,
      "goodsList": [{
        "id": 1064021,
        "url": "http://yanxuan.nosdn.127.net/c83a3881704094ddd3970099ca77d115.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "清欢日式可调节台灯",
        "price": 199
      }, {
        "id": 1097004,
        "url": "http://yanxuan.nosdn.127.net/54f822e9c542d20566c7f70f90d52ae6.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "原素系列实木餐桌",
        "price": 1699
      }, {
        "id": 1097005,
        "url": "http://yanxuan.nosdn.127.net/e5fd0724a05387615738173fb8f1570d.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "原素系列实木餐椅（两把）",
        "price": 1199
      }, {
        "id": 1097016,
        "url": "http://yanxuan.nosdn.127.net/a7e6df722b82ad1b0158adcbdcf30df9.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "原素系列1.8米实木电视柜",
        "price": 2799
      }, {
        "id": 1097009,
        "url": "http://yanxuan.nosdn.127.net/e7b68189ef2f77a28110c3fc7ca5a697.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "原素系列实木书桌",
        "price": 1599
      }, {
        "id": 1097007,
        "url": "http://yanxuan.nosdn.127.net/b6e132180679b0673486145decc89aa3.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "原素系列立式实木圆桌",
        "price": 759
      }]
    }, {
      "id": 2,
      "name": "工具配件",
      "banner": "http://nos.netease.com/yanxuan/935f1ab7dcfeb4bbd4a5da9935161aaf.jpg",
      "height": 155,
      "goodsList": [{
        "id": 1083009,
        "url": "http://yanxuan.nosdn.127.net/76e5c820f6bb71a26517ffa01f499871.png",
        "isNew": 0,
        "goods_number": 1000,
        "name": "海洋之心永生花",
        "price": 90
      }, {
        "id": 1065004,
        "url": "http://yanxuan.nosdn.127.net/05977cf923857db0c44b405bd87b096b.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "悦己日式木质落地镜",
        "price": 199
      }, {
        "id": 1093000,
        "url": "http://yanxuan.nosdn.127.net/1a22cc488390b616e75afbbd94db6584.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "月光曲·小木棉",
        "price": 39
      }, {
        "id": 1109034,
        "url": "http://yanxuan.nosdn.127.net/d25b5990f16c6d1ac168a34b7aeca681.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "LCD电子钟",
        "price": 0.5
      }, {
        "id": 1109004,
        "url": "http://yanxuan.nosdn.127.net/d25b5990f16c6d1ac168a34b7aeca681.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "简日挂钟",
        "price": 89
      }, {
        "id": 1125016,
        "url": "http://yanxuan.nosdn.127.net/46f3059b020eb3900e9af8e8c1af8a97.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "大丰收收纳摆件",
        "price": 139
      }]
    }, {
      "id": 3,
      "name": "日常杂货",
      "banner": "http://nos.netease.com/yanxuan/a0c91ae573079830743dec6ee08f5841.jpg",
      "height": 155,
      "goodsList": [{
        "id": 1135052,
        "url": "http://yanxuan.nosdn.127.net/63f5da1f5363af43aa91864bf66af48e.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "日式简约素色窗帘",
        "price": 259
      }, {
        "id": 1135051,
        "url": "http://yanxuan.nosdn.127.net/9126151f028a8804026d530836b481cb.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "日式素雅纯色流星纹窗帘",
        "price": 299
      }, {
        "id": 1135056,
        "url": "http://yanxuan.nosdn.127.net/536246ca4adb77274a94b18bb2f91f47.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "糖果色凹凸条纹儿童房窗帘",
        "price": 259
      }, {
        "id": 1135055,
        "url": "http://yanxuan.nosdn.127.net/87b6a608b99279ebf1764682e9e5fcec.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "北欧印象几何条纹混色窗帘",
        "price": 399
      }, {
        "id": 1135053,
        "url": "http://yanxuan.nosdn.127.net/1f9e34b1aadd14ea0c9c299c530d86ba.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "法式复古山形纹提花窗帘",
        "price": 429
      }, {
        "id": 1135054,
        "url": "http://yanxuan.nosdn.127.net/30d7daa0824fbb61b6c36175c8203349.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "美式田园风蜻蜓提花窗帘",
        "price": 559
      }]
    }, {
      "id": 4,
      "name": "宠物世界",
      "banner": "http://nos.netease.com/yanxuan/72de912b6350b33ecf88a27498840e62.jpg",
      "height": 155,
      "goodsList": [{
        "id": 1135050,
        "url": "http://yanxuan.nosdn.127.net/366f3f3f0e8971c8cf871e2b55b74ff2.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "多功能封闭式环保除菌猫砂盆",
        "price": 179
      }, {
        "id": 1130039,
        "url": "http://yanxuan.nosdn.127.net/03c73e1f1ce1d2365e83b3230e507030.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "房型封闭式凉感条纹宠物窝",
        "price": 89
      }, {
        "id": 1064003,
        "url": "http://yanxuan.nosdn.127.net/58ed94b63b39339e7814f1339013793c.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "六边形南瓜式宠物窝",
        "price": 89
      }, {
        "id": 1064000,
        "url": "http://yanxuan.nosdn.127.net/ebe118f94ddafe82c4a8cd51da6ff183.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "清新条纹开放式宠物窝",
        "price": 79
      }, {
        "id": 1064002,
        "url": "http://yanxuan.nosdn.127.net/48dbfe207b2203ef45055dcc9cedbe60.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "秋冬加厚条纹宠物窝",
        "price": 69
      }, {
        "id": 1064004,
        "url": "http://yanxuan.nosdn.127.net/337da7094c1df295ca0f0b8baa55b2d5.png",
        "isNew": 0,
        "goods_number": 100,
        "name": "方形封闭式宠物窝",
        "price": 99
      }]
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let that = this
    wx.getStorage({
      key: 'id',
      success(res) {
        that.setData({
          TabCur: res.data,
          MainCur: res.data,
          VerticalNavTop: (res.data - 1) * 50
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    wx.setStorage({
      key: "id",
      data: 0
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      MainCur: e.currentTarget.dataset.id,
      VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
    })
  },
  VerticalMain(e) {
    let that = this;
    let list = that.data.categoryList;
    let tabHeight = 0;
    if (that.data.load) {
      for (let i = 0; i < list.length; i++) {
        let view = wx.createSelectorQuery().select("#main-" + list[i].id);
        view.fields({
          size: true
        }, data => {
          list[i].top = tabHeight;
          tabHeight = tabHeight + data.height;
          list[i].bottom = tabHeight;
        }).exec();
      }
      that.setData({
        load: false,
        categoryList: list
      })
    }
    let scrollTop = e.detail.scrollTop + 20;
    for (let i = 0; i < list.length; i++) {
      if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
        that.setData({
          VerticalNavTop: (list[i].id - 1) * 50,
          TabCur: list[i].id
        })
        return false
      }
    }
  },
  jumpPage() {
    wx.navigateTo({
      url: `/pages/goods/index`,
    })
  },
})