// app.js
// app.js
App({
  onLaunch () {
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (!isLoggedIn) {
      // 如果未登录，跳转到登录页面
      wx.redirectTo({
        url: '/pages/logs/logs'
      });
    }
  },
  //全局变量
  globalData: {
    userInfo: null
  }
})
