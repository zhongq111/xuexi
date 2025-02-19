// logs.js
// pages/logs/logs.js
const util = require('../../utils/util.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 'login', // 当前显示的是登录还是注册表单
    username: '', // 用户名
    password: '', // 密码
    confirmPassword: '' // 确认密码（注册时使用）
  },

  /**
   * 切换到登录表单
   */
  switchToLogin() {
    this.setData({
      currentTab: 'login'
    });
  },

  /**
   * 切换到注册表单
   */
  switchToRegister() {
    this.setData({
      currentTab: 'register'
    });
  },

  /**
   * 处理用户名输入
   */
  onUsernameInput(e) {
    this.setData({
      username: e.detail.value
    });
  },

  /**
   * 处理密码输入
   */
  onPasswordInput(e) {
    this.setData({
      password: e.detail.value
    });
  },

  /**
   * 处理确认密码输入（注册时使用）
   */
  onConfirmPasswordInput(e) {
    this.setData({
      confirmPassword: e.detail.value
    });
  },

  /**
   * 处理登录按钮点击
   */
  onLogin() {
    const { username, password } = this.data;
    // 简单的登录验证，用户名和密码都是 123456
    if (username === '123456' && password === '123456') {
      // 登录成功，保存登录状态到本地存储
      wx.setStorageSync('isLoggedIn', true);
      // 跳转到 index 主页
      wx.switchTab({
        url: '/pages/index/index',
      })({
        url: '/pages/index/index',
        fail: function (err) {
          console.log('跳转失败:', err);
        }
      });
    } else {
      // 登录失败，显示提示信息
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none'
      });
    }
  },

  /**
   * 处理注册按钮点击
   */
  onRegister() {
    const { username, password, confirmPassword } = this.data;
    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次输入的密码不一致',
        icon: 'none'
      });
      return;
    }
    // 这里可以添加注册的逻辑，比如调用后端接口进行用户注册
    console.log('注册', username, password);
  }
});