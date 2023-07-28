// pages/homepage/policylearn/policylearn.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //当前页面列表的编号：0位科技政策，1人才政策，2金融政策
    TabCur: 0,
    newsList: [{
      id: "12313",
      title: "这里是一条测试数据，如果我显示了，说明声明周期的内的函数没有生效请检查",
      user: "测试者",
      date: "2023-07-27",
      url: "https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"
    }],
  },
  tabSelect(e) {
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      newsList:[{
        
          id: "1213",
          title: "这里是另外一条测试数据，如果我显示了，说明跳转成功了",
          user: "测试者",
          date: "2023-07-27",
          url: "https://image.meiye.art/Fha6tqRTIwHtlLW3xuZBJj8ZXSX3?imageMogr2/thumbnail/450x/interlace/1"
        
      }]
    })

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

  }
})