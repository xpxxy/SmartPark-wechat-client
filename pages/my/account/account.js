// pages/my/account/account.js
import {
  logout,
  req
} from "../../../utils/utils.js"
const api = require("../../../utils/api.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: {
      avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
      nickName: '智慧园区用户',
      parkID: '00001'
    }
  },
  onChooseAvatar(e) {
    // console.log(e.detail.avatarUrl)
    this.setData({
      avatar: e.detail.avatarUrl
    })
    wx.uploadFile({
      filePath: this.data.avatar,
      name: 'file',
      url: api.uploadAvatar,
      header: {
        'satoken': wx.getStorageSync('satoken')
      },
      success: (res) => {
        // console.log(res)
        wx.request({
          url: api.userInfo,
          method: 'GET',
          data: null,
          header: {
            'satoken': wx.getStorageSync('satoken'),
          },
          success: (res) => {
            // console.log(res)
            this.setData({
              "user.avatar": res.data.data.avatar
            })
          }
        })
        wx.showToast({
          title: '修改成功',
          icon: 'success',
        })
      }
    })
    // console.log(this.data.avatarUrl)
  },
  mylogout() {
    wx.showModal({
      title: '提示',
      content: '你真的要退出登录吗',
      comfirmText:'确定',
      confirmColor:'#e54d42',
      cancelText:'取消',
      cancelColor:'#666666',
      complete: (res) => {
        if (res.cancel) {
        }
        if (res.confirm) {
          logout()
        }
      }
    })
    
  },
  updateData() {
    wx.request({
      url: api.userInfo,
      method: 'GET',
      data: null,
      header: {
        'satoken': wx.getStorageSync('satoken'),
        "content-type": 'application/x-www-form-urlencoded'
      },
      success: (res) => {
        // console.log(res)
        this.setData({
          "user.nickName": res.data.data.nickName,
          "user.parkID": res.data.data.id,
          "user.avatar": res.data.data.avatar
        })
        
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.updateData()
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
    this.updateData()
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