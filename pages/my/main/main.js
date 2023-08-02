// pages/my/main/main.js
const api = require("../../../utils/api.js")
import {request} from "../../../utils/utils.js"
Component({
  /**
   * 组件的属性列表
   */
  options:{
    styleIsolation:"apply-shared",
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    loginStatus:false,
    iconList: [{
      icon: 'formfill',
      color: 'blue',
     
      name: '我的订单'
    }, {
      icon: 'servicefill',
      color: 'blue',
    
      name: '我的报修',
      bindtap: "bindZan"
    }, {
      icon: 'writefill',
      color: 'blue',
      
      name: '收货地址',
      bindtap: "showResource"
    }, {
      icon: 'activityfill',
      color: 'blue',
      
      name: '我的活动',
      bindtap: "bindPoint"
    },{
      icon:'peoplefill',
      color:'blue',
      name:'账号设置',
      bindtap:'mypage'
    }],
    user:{
      nickname:'',
      id:'',
      avatar:'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    mypage(){
      wx.navigateTo({
        url: '/pages/my/account/account',
      })
    },
    login(){
      wx.login({
        success: (res) => {
          console.log(res)
          request()
        },
      })
    }
  }
})
