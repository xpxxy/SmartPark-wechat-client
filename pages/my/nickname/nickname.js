// pages/my/nickname/nickname.js
const api = require("../../../utils/api.js")
import {
  req
} from "../../../utils/utils.js"
import WxValidate from "../../../utils/WxValidate.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      nickName: ''
    }

  },
  
  submit(e) {
    const params = e.detail.value
    // console.log(params)
    if (!this.WxValidate.checkForm(params)) {
      console.log(1)
      const error = this.WxValidate.errorList[0];
      wx.showModal({
        title:'提示',
        showCancel: false,
        content: error.msg,
      })
      return false;
    } else {
      this.setData({
        'form.nickName':e.detail.value.nickName
      })
      var sendData = {}
      sendData['data'] = this.data.form;
      sendData['url'] = api.editInfo;
      sendData['method'] = 'POST';
      sendData['contentType'] = 'application/json';
      req(sendData).then(res => {
        // console.log(res)
        if (res.code == 200)
          wx.showToast({
            title: '修改成功',
            icon: 'success'
          })
        wx.request({
          url: api.userInfo,
          method: 'GET',
          data: null,
          header: {
            'satoken': wx.getStorageSync('satoken'),
            'content-type':'application/json'
          },
          success: (res) => {
            // console.log(res)
            this.setData({
              "form.nickName": res.data.data.nickName
            })
          }
        })

      })
    }

    // this.setData({

    // })

  },
  //表单校验函数
  initValidate() {
    const rules = {
      nickName: {
        required: true,
        maxlength: 20,
        minlength:1
      }
    }
    const messages = {
      nickName: {
        required: '名称不得为空',
        maxlength: '名称太长了',
        minlength: '名称太短了'
      }
    }
    this.WxValidate = new WxValidate(rules,messages)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initValidate()
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
          "form.nickName": res.data.data.nickName,
        })
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