// pages/my/main/main.js
const api = require("../../../utils/api.js")
import {
  login,
  logout,
  randomString,
  req
} from "../../../utils/utils.js"
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: "apply-shared",
  },
  // 组件声明周期，attach周期可以对data操作，达到预加载的效果，但是最好不要大规模赋值（影响性能）
  lifetimes: {
    attached: function () {
      // console.log("im ready")
      this.updateData()
    },
    ready: function () {
      // console.log("im ready")
      this.updateData()
    }
  },
  pageLifetimes: {
    show: function () {
      // console.log("im show")
      wx.request({
        url: api.userInfo,
        method: 'GET',
        header: {
          'satoken': wx.getStorageSync('satoken')
        },
        success: (res) => {
          // console.log(res)
          this.setData({
            "user.nickName": res.data.data.nickName,
            "user.id": res.data.data.id,
            "user.avatar": res.data.data.avatar
          })
        }
      })
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    wechat:[
      {
        icon:'wechat',
      }
    ],
    loginStatus: false,
    iconList: [{
      icon: 'formfill',
      color: 'blue',
      name: '我的订单',
      bindtap:'mybills'
    }, {
      icon: 'servicefill',
      color: 'blue',
      name: '我的报修',
      bindtap: "myfix"
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
    }, {
      icon: 'peoplefill',
      color: 'blue',
      name: '账号设置',
      bindtap: 'mypage'
    }],
    user: {
      nickName: '',
      id: '',
      avatar: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
    },
    session: {
      openid: "",
      sessionKey: "",
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    myfix(){
      var satoken = wx.getStorageSync('satoken')
      if (satoken){
        wx.navigateTo({
          url:'/pages/my/myfix/myfix'
        })
      }else if(!satoken){
        wx.showToast({
          title: '您还没有登录',
          icon: 'error',
        })
      }
    },
    mypage() {
      var token = wx.getStorageSync('satoken')
      if (token) {
        wx.navigateTo({
          url: '/pages/my/account/account',
        })
      } else if (!token) {
        wx.showToast({
          title: '您还没有登录',
          icon: 'error',
        })
      }

    },
    mybills() {
      var token = wx.getStorageSync('satoken')
      if (token) {
        wx.navigateTo({
          url: '/pages/my/bills/bills',
        })
      } else if (!token) {
        wx.showToast({
          title: '您还没有登录',
          icon: 'error',
        })
      }

    },
    mylogin() {
      
      login(api.wxlogin, "POST").then(res => {
        wx.request({
          url: api.userInfo,
          method: 'GET',
          data: null,
          header: {
            'satoken': wx.getStorageSync('satoken'),
            "content-type": 'application/x-www-form-urlencoded'
          },
          success: (res) => {
            this.hideModal()
            console.log(res)
            this.setData({
              user: res.data.data,
              loginStatus: true
            })

          }
        })
      })

    },
    updateData() {
      let token = wx.getStorageSync('satoken')
      if (token) {
        this.setData({
          loginStatus: true
        })
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
              'user.nickName': res.data.data.nickName,
              'user.id': res.data.data.id,
              'user.avatar': res.data.data.avatar
            })

            // console.log()
          }
        })
      }
    },
    showModal(e) {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    },
    hideModal(e) {
      this.setData({
        modalName: null
      })
    },
  }
})