// pages/homepage/partybuild/partybuild.js
import {request} from "../../../utils/utils.js"
const api = require("../../../utils/api.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // bannerUrl:'/images/buildbanner.jpg'
    cardCur: 0,
    swiperCurrent: 0,
    swiperPic: [], //轮播图片的存放数组
    curMembers: 12, //党员数据
    curEvents: 9,  //党员活动
    curVolunteer: 22, //员工
    article: [{
      id: 1123,
      title: '党员干部，干出风采！',
      content: '我是测试内容，请删掉我。我是测试内容，请删掉我。我是测试内容，请删掉我。我是测试内容，请删掉我。我是测试内容，请删掉我。',
      imgUrl: 'https://s1.ax1x.com/2023/08/04/pPFo49H.png',
      brief: '党员干部实干出风采',
      date: '2022-2-3',
      author: 'test1'
    },
    {
      id: 23132,
      title: '平安建设活动',
      content: 'nullnullnullnullnullnull',
      imgUrl: 'https://img1.baidu.com/it/u=15210365,2703106766&fm=253&fmt=auto&app=138&f=JPEG?w=667&h=500',
      brief: '8月25日上午，示范区管委会主任肖文兴，区党工委委员、管委会副主任梁中贤、区建设局局长闫战胜等...一行到城西办事处新西门社区调研老旧小区改造工作进展情况。城西街道党工委书记魏宁波、主任侯世强、副主任陈德宗陪同。',
      date: '2022-2-3',
      author: 'test1'
    },
    {
      id: 3,
      title: '责任区创建专题研讨会',
      content: 'nullnullnullnullnullnull',
      imgUrl: 'https://img1.baidu.com/it/u=1328511155,3674401884&fm=253&fmt=auto&app=138&f=JPEG?w=689&h=500',
      brief: '为强化党建工作与生产经营工作的深度融合，解决新能源公司点多面广战线长带来的党建工作不均衡问题。9月10日，大唐新能源公司组织14名党支部书记到“党员责任区”试点锐驰党支部进行调研学习。',
      date: '2022-2-3',
      author: 'test1'
    }]
  },
  cardSwiper(e) {
    this.setData({
      cardCur: e.detail.current
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //设置轮播图缓存，但是微信会自动设置强缓存，
    //所以貌似没什么用，图片的强缓存需要后端发送的请求头里多设置一个字段设置缓存时间
    // var that =this
    // var swiperCache = wx.getStorageSync('swiperCache')
    // //如果有缓存直接从缓存读取，
    // if (swiperCache){
    //   that.setData({
    //     swiperPic:swiperCache
    //   })
    // }
    request(api.partyPic,null,'GET',{"content-type":"application/x-www-form-urlencoded"}).then(res=>{
        // console.log(res.data)
      this.setData({
        swiperPic:res.data.data
      })
      // wx.setStorageSync('swiperCache',res.data.data)
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