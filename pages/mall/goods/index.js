// pages/goods/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://yanxuan.nosdn.127.net/9331158a10c79a0663e53865cd1689ec.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'http://yanxuan.nosdn.127.net/b4706343b3817e690d778e5f8a68a8de.jpg',
    }, {
      id: 2,
      type: 'image',
      url: 'http://yanxuan.nosdn.127.net/7a8499c2ded7790addffb9d87fc4532b.jpg'
    }, {
      id: 3,
      type: 'image',
      url: 'http://yanxuan.nosdn.127.net/2831d02bb34fabbcaf602fdf7a9cc409.jpg'
    }],
    imgDetail: ["http://yanxuan.nosdn.127.net/1438c1c7d5fac9ee8a957f0e498efbab.jpg", "http://yanxuan.nosdn.127.net/80d0037836d80ec0aa25ff641c261735.jpg", "http://yanxuan.nosdn.127.net/d527b3bb238e9399d00c94e59f067ab6.jpg", "http://yanxuan.nosdn.127.net/b4004fb355802f2bf0ade96e53777f7b.jpg", "http://yanxuan.nosdn.127.net/9e2156d0593a949ef23458950a1c3b45.jpg", "http://yanxuan.nosdn.127.net/c1670a25eb39faab38247fbbd302e1aa.jpg", "http://yanxuan.nosdn.127.net/488551c7d433c52a5d6511ca5dca96ba.jpg", "http://yanxuan.nosdn.127.net/5b3997a05bce53a3e65cc22357d09034.jpg", "http://yanxuan.nosdn.127.net/f97f5fc70124c70b56598086acf3e4f0.jpg", "http://yanxuan.nosdn.127.net/2c48c53b8727b1d0209a1db7d03f1f50.jpg", "http://yanxuan.nosdn.127.net/bc22d8146d53d256d7972478a7858a42.jpg", "http://yanxuan.nosdn.127.net/8592232780fdca35d29c9e9cef0e25f4.jpg", "http://yanxuan.nosdn.127.net/56e16e7ae04456d801533b969de58127.jpg", "http://yanxuan.nosdn.127.net/fe7ad603619f4614c11a3afacf98e9f9.jpg", "http://yanxuan.nosdn.127.net/c04470af48bf83539efe1ea0380cda20.jpg", "http://yanxuan.nosdn.127.net/14d70de1f7ea5309e97f145a895bdd6d.jpg", "http://yanxuan.nosdn.127.net/4cd3c3a60d92575400098cd31cf994bb.jpg", "http://yanxuan.nosdn.127.net/c46be17c0c367292dd3a612d277898f6.jpg", "http://yanxuan.nosdn.127.net/68e909b6bbfd4760f6d94170bb9f1e32.jpg", "http://yanxuan.nosdn.127.net/6e2fa55c8e1f12d592d85582c8be22f4.jpg", "http://yanxuan.nosdn.127.net/9ccbf36677da68035d9cca9deaf53bb3.jpg", "http://yanxuan.nosdn.127.net/ae50a463802c44ff72b340374c93cbe3.jpg", "http://yanxuan.nosdn.127.net/7afafb4d6813b46bf0ad3e750ee150d2.jpg", "http://yanxuan.nosdn.127.net/fbcb8970bf6c845ce6c47ce5b15e8c74.jpg", "http://yanxuan.nosdn.127.net/f0a696a54810118531e752d2f12bdfa4.jpg", "http://yanxuan.nosdn.127.net/28ccd9c35226d3e5c7c2911b37ed4a4f.jpg", "http://yanxuan.nosdn.127.net/288c91f8d06c08ca0f7c84a7c24e73be.jpg", "http://yanxuan.nosdn.127.net/8a132263063ce01eb7b1aeb772343841.jpg", "http://yanxuan.nosdn.127.net/e71801586b48c9c9e0fff8a839eb9cf0.jpg", "http://yanxuan.nosdn.127.net/87df9ec07b264d5f504a29d89ee2b383.jpg", "http://yanxuan.nosdn.127.net/1b170f3f949467f5eb92406a6a348ae8.jpg", "http://yanxuan.nosdn.127.net/6d02894b6d9134f0f0246b5cf51b116e.jpg", "http://yanxuan.nosdn.127.net/1b00efd8962c004cfa2ed7b1c785f090.jpg", "http://yanxuan.nosdn.127.net/80ecf013fd3b56477fe2473f76d46131.jpg", "http://yanxuan.nosdn.127.net/9f469a6d04a48d833f91e7c84bee11f7.jpg", "http://yanxuan.nosdn.127.net/7c87cf3b2e6ae0f67edc0a45f71a427b.jpg", "http://yanxuan.nosdn.127.net/390276a05dabfa7578e6f7d316692732.jpg", "http://yanxuan.nosdn.127.net/c8a5f9c29d293488c2b35453e137691a.jpg", "http://yanxuan.nosdn.127.net/c13b7d09ed64a8cb73970cd7b66093a0.jpg", "http://yanxuan.nosdn.127.net/f6a10c6dbf2116b893cf487c2a959c82.jpg", "http://yanxuan.nosdn.127.net/9d7d50e5fcd430b9ccde72cbd84addea.jpg", "http://yanxuan.nosdn.127.net/a733fc402f2ed628c003c9f08c59f993.jpg", "http://yanxuan.nosdn.127.net/25d64e1901953a651bc7de7e3edde87c.jpg", "http://yanxuan.nosdn.127.net/0c1526ed336c04ad9703d3a203d42d88.jpg", "http://yanxuan.nosdn.127.net/6768f1bac041434d73bb3c30bbbed21b.jpg"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

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
  jumpTab() {
    wx.switchTab({
      url: '/pages/cart/index',
    })
  },
  jumpPage(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url,
    })
  },
})