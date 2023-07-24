// app.js


App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    wx.getSystemInfo({
      success: e => {
          this.globalData.StatusBar = e.statusBarHeight;
            let capsule = wx.getMenuButtonBoundingClientRect();
            if (capsule) {
              this.globalData.Custom = capsule;
              this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
            } else {
              this.globalData.CustomBar = e.statusBarHeight + 50;
            }
          }
    })
  },
  globalData: {
    userInfo: null
  }
})
