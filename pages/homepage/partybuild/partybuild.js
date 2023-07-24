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
      imgUrl: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
      brief: '党员干部实干出风采',
      date: '2022-2-3',
      author: 'test1'
    },
    {
      id: 23132,
      title: '党员干部，干出风采！',
      content: 'nullnullnullnullnullnull',
      imgUrl: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
      brief: '党员干部实干出风采',
      date: '2022-2-3',
      author: 'test1'
    },
    {
      id: 3,
      title: '党员干部，干出风采！',
      content: 'nullnullnullnullnullnull',
      imgUrl: 'https://image.meiye.art/FlqKg5bugFQD5Qzm_QhGM7ET4Mtx?imageMogr2/thumbnail/450x/interlace/1',
      brief: '党员干部实干出风采',
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

    // wx.request({
    //   url: api.partyPic,
    //   method:'GET',
    //   success:(res)=>{
    //     console.log(res)
    //     let url =[]
    //     url = res.data.data
    //     this.setData({
    //       picture: url
    //     })
    //     console.log(url)
    //   }
    // })
      request(api.partyPic).then(res=>{
        // console.log(res.data)
        this.setData({
          swiperPic:res.data.data
        })
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