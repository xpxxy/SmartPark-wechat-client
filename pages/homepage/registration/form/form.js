// pages/homepage/registration/form/form.js
import valid from "../../../../utils/WxValidate.js";
import {request} from "../../../../utils/utils.js"
import {formatTime} from "../../../../utils/utils.js";
const api = require("../../../../utils/api.js");
var today = new Date()
let loading = false;
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    picker: ['五年','十年','二十年','长期'],
    form:{
      name:'', //公司名字
      legalRepresentative:'', //法人名字
      registeredCapital:0,//注册资金
      operatingPeriod:'',//经营期限
      businessScope:'',  //经营范围
      phone:0, //联系电话
      businessLicense:'' //证书的图片路径
    },
    imgList: [],//临时路径
    show: false,
    status: '',
    message: '',
    time: 0,
   
  },
  PickerChange(e) {
    this.setData({
      index: e.detail.value
    })
  },
  textareaAInput(e) {
    this.setData({
      'form.businessScope': e.detail.value
    })
    // console.log(this.data.form.scope)
  },
  ChooseImage() {
    wx.chooseMedia({
      count: 1, //文件个数
      mediaType:['image'],
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      camera:['back'], //指定使用的是后置摄像头
      sourceType: ['album','camera'], //从相册选择,相机
      //选择图片成功的回调函数
      success: (res) => {
        // console.log(res)
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFiles[0].tempFilePath)
          })
        } else {
          this.setData({
            imgList: [res.tempFiles[0].tempFilePath]
          })
        }
        // console.log(this.data.imgList)
      }
    });
  },
  //查看图片
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  //删除图片的提示
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
    var status =JSON.parse(e.currentTarget.dataset.status)
    if (status){
      this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
      // console.log(this.data.imgList)
    }
    // console.log(status)
  },
  //表单提交
  submit(e){

    //从storagesession里取出注册人id，由微信api提供
      // console.log(e)
      var sendData = this.data.form
      sendData = Object.assign(sendData,e.detail.value)
      console.log(sendData)
      wx.uploadFile({
        filePath: this.data.imgList[0],//图片路径
        name: 'file',//key，非常关键,必填项
        url:  api.registerPic,//上传路径
        timeout: 2500,//超时时间
        //回调函数
        success: (res) => {
          //转换数据类型
            res = JSON.parse(res.data)
            this.setData({
              loadModal:false,
            })
            sendData.businessLicense = res.url
            // console.log(sendData)
            request(api.uploadInfo,sendData, "PUT").then(res=>{
              console.log(res)
            })
            this.OK()
            
        },
        fail: (res) => {
          setTimeout(()=>{
            this.setData({
              loadModal:false
            })
          },800)
          this.NO()
        },
        // complete: (res) => {},
      })
  },
  loadModal() {
    this.setData({
      loadModal: true
    })
  },
  /**
   * 轻提示展示函数
   */
  setShow(status, message, time = 2000) {
    if (loading) {
      return
    }
    loading = true;
    try {
      this.setData({
        status,
        message,
        time,
        show: true,
      })
      setTimeout(() => {
        this.setData({
          show: false,
        })
        loading = false;
      }, time)
    } catch {
      loading = false;
    }
  },
  OK() {
    this.setShow("success", "提交成功！");
  },
  NO() {
    this.setShow("error", "提交失败！");
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