// pages/homepage/quickfix/quickfix.js

const api = require("../../../utils/api")
import WxValidate from "../../../utils/WxValidate.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      "park": "",
      "company": "",
      "applicant": "",
      "phone": "",
      "repairArea": "",
      "refer": "",
    },
  },
  submit(e) {
    const params = e.detail.value
    if (!this.WxValidate.checkForm(params)) {
      const error = this.WxValidate.errorList[0];
      wx.showModal({
        title: '提示',
        showCancel: false,
        content: error.msg,
      })
      return false;
    } else {
      var sendData = this.data.form
      sendData = Object.assign(sendData, e.detail.value)
      console.log(sendData)
      wx.request({
        url: api.quicfix,
        method: 'PUT',
        header: {
          'satoken': wx.getStorageSync('satoken')
        },
        data: sendData,
        success:(res)=>{
          // console.log(res)
          if(res.data.code == 200){
            wx.showToast({
            title: '提交成功',
            icon:'success'
          })
          }else if(res.data.code == 500){
            wx.showToast({
              title: '提交失败',
              icon:'error'
            })
          }
          
        }
      })
    }

  },
  initValidate() {
    const rules = {
      applicant: {
        required: true,
      },
      company: {
        required: true
      },
      phone: {
        required: true,
        tel: true
      },
      park: {
        required: true
      },
      repairArea: {
        required: true
      },
      refer: {
        required: true
      }
    }
    const messages = {
      applicant: {
        required: '名字不得为空',
      },
      company: {
        required: '公司不得为空',
      },
      phone: {
        required: '手机号不得为空',
      },
      park: {
        required: '园区不得为空',
      },
      repairArea: {
        required: '维修区域不得为空',
      },
      refer: {
        required: '描述不得为空',
      },

    }
    this.WxValidate = new WxValidate(rules, messages)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.initValidate()
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