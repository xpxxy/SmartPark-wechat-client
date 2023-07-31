// pages/homepage/registration/form/form.js
import valid from "../../../../utils/WxValidate.js"
var today = new Date()
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    startdate: '',
    enddate: '',
    form:{
      companyName:'', //公司名字
      LRName:'', //法人名字
      startDate:'', //起始日期
      endDate:'',  //终止日期
      scope:'',  //经营范围
      contact:'', //联系电话
      licenseUrl:'' //证书的图片路径
    },
    imgList: [],
  },
  startChange(e) {
    this.setData({
      'form.startDate': e.detail.value
    })
  },
  endChange(e) {
    this.setData({
      'form.endDate': e.detail.value
    })
  },
  textareaAInput(e) {
    this.setData({
      'form.scope': e.detail.value
    })
    console.log(this.data.form.scope)
  },
  ChooseImage() {
    wx.chooseMedia({
      count: 4, //文件个数
      mediaType:['image'],
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      camera:['back'], //指定使用的是后置摄像头
      sourceType: ['album','camera'], //从相册选择,相机
      //选择图片成功的回调函数
      success: (res) => {
        console.log(res)
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFiles[0].tempFilePath)
          })
          
        } else {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFiles[0].tempFilePath)
          })
        }
        console.log(this.data.imgList)
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    wx.showModal({
      title: '提示',
      content: '确定要删除图片吗？',
      cancelText: '取消',
      confirmText: '确定',
      success: res => {
        if (res.confirm) {
          this.data.imgList.splice(e.currentTarget.dataset.index, 1);
          this.setData({
            imgList: this.data.imgList
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      "form.startDate":today.getFullYear()+'-'+Number(today.getMonth()+1)+'-'+today.getDate(),
      "form.endDate":today.getFullYear()+'-'+Number(today.getMonth()+1)+'-'+today.getDate()
      
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