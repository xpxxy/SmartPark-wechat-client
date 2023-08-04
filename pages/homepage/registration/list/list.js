const api = require("../../../../utils/api")

// pages/homepage/registration/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    header: [{
      company: '公司名称',
      LR: '法人',
      time:'时间'
      
    }],
    
      
      
  

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: api.getRegistrationList+'?pageNum=1&pageSize=5',
      method:'GET',
      header:{
        'satoken':wx.getStorageSync('satoken'),
        
      },
      success:(res)=>{
        // console.log(res)
        if(res.data.code == 200){
          let list=[]
          res.data.data.records.forEach(element => {
            list.push(element)
          });
          this.setData({
            list,
          })
        }
      }
      
    })
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