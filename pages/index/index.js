// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottom_list: [{
      name: "",
      imgUrl: ""
    }],
    currentPage: "index",

  },
  navChange(e) {
    this.setData({
      //!!!!!!注意驼峰会被转换成小写,在wxml的标签得用连接符'-'!!!!!
      currentPage: e.currentTarget.dataset.currentPage
    })
    // console.log(e);
  },
  update(){
    wx.getStorage({
      key: 'sessionKey',
      encrypt: true,
      success: () => {
        this.setData({
          loginStatus: true
        })
      },
      fail: () => {
        this.setData({
          loginStatus: false
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // console.log(options)
    if (Object.getOwnPropertyNames(options).length !== 0) {
      // console.log(1)
      this.setData({
        currentPage: options.currentPage
      })
    }
    wx.getStorage({
      key: 'sessionKey',
      encrypt: true,
      success: () => {
        this.setData({
          loginStatus: true
        })
      },
      fail: () => {
        this.setData({
          loginStatus: false
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    this.update()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.update()
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