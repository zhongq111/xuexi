// pages/person/person.js
Page({
  data: {
    userInfo: {
      avatarUrl: '',
      nickname: '',
      gender: 0,
      class: '',
      signature: '',
      phone: ''
    },
    editUserInfo: {},
    isEditPopupShow: false,
    genderList: ['男', '女', '未知']
  },

  onLoad() {
    // 初始化数据，这里可以根据实际情况从本地存储或服务器获取数据
    this.setData({
      userInfo: {
        avatarUrl: 'https://example.com/default_avatar.jpg',
        nickname: '张三',
        gender: 1,
        class: '高三（1）班',
        signature: '积极向上，勇往直前',
        phone: '13800138000'
      },
      editUserInfo: {
        avatarUrl: 'https://example.com/default_avatar.jpg',
        nickname: '张三',
        gender: 1,
        class: '高三（1）班',
        signature: '积极向上，勇往直前',
        phone: '13800138000'
      }
    });
  },

  // 打开修改表单
  openEditPopup() {
    this.setData({
      isEditPopupShow: true
    });
  },

  // 关闭修改表单
  closeEditPopup() {
    this.setData({
      isEditPopupShow: false
    });
  },

  // 选择头像
  chooseAvatar() {
    wx.chooseMedia()({
      count: 1,
      success: (res) => {
        this.setData({
          'editUserInfo.avatarUrl': res.tempFilePaths[0]
        });
      }
    });
  },

  // 昵称输入事件
  onNicknameInput(e) {
    this.setData({
      'editUserInfo.nickname': e.detail.value
    });
  },

  // 性别选择事件
  onGenderChange(e) {
    this.setData({
      'editUserInfo.gender': e.detail.value + 1
    });
  },

  // 班级输入事件
  onClassInput(e) {
    this.setData({
      'editUserInfo.class': e.detail.value
    });
  },

  // 签名输入事件
  onSignatureInput(e) {
    this.setData({
      'editUserInfo.signature': e.detail.value
    });
  },

  // 手机号输入事件
  onPhoneInput(e) {
    this.setData({
      'editUserInfo.phone': e.detail.value
    });
  },

  // 密码输入事件
  onPasswordInput(e) {
    this.setData({
      newPassword: e.detail.value
    });
  },

  // 保存修改
  saveChanges() {
    // 这里可以添加保存到本地存储或服务器的逻辑
    this.setData({
      userInfo: this.data.editUserInfo,
      isEditPopupShow: false
    });
    wx.showToast({
      title: '修改成功',
      icon: 'success'
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const isLoggedIn = wx.getStorageSync('isLoggedIn');
    if (!isLoggedIn) {
      // 如果未登录，跳转到登录页面
      wx.redirectTo({
        url: '/pages/logs/logs'
      });
    }
  },
  // //退出登录
  // // ButtonSignOut(){
  // //   wx.redirectTo({
  // //     url: '/pages/logs/logs'
  // //   });

  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    if(typeof this.getTabBar==="function"&&this.getTabBar()){
      this.getTabBar().setData({
        active:2
      })
    }

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
