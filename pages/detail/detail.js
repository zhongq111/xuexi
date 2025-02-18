// pages/detail/detail.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    isPopupShow: false,
    comment: '',
    comments: [],
    textareaValue: ''
  },
  ButtonAddPost() {
    this.setData({
      isPopupShow: true
    });
  },

  // 输入框内容变化时更新评论数据
  onInputChange(e) {
    this.setData({
      comment: e.detail.value
    });
  },

  // 发送评论
  sendComment() {
    const comment = this.data.comment;
    if (comment.length > 100) {
      wx.showToast({
        title: '评论过长',
        icon: 'none'
      });
      return;
    }
    if (comment.trim() === '') {
      wx.showToast({
        title: '评论不能为空',
        icon: 'none'
      });
      return;
    }
    const newComments = [...this.data.comments, comment];
    this.setData({
      comments: newComments,
      comment: '',
      isPopupShow: false
    });
  },

  // 关闭弹出层
  closePopup() {
    this.setData({
      isPopupShow: false,
      comment: ''
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      title: options.title,
      content: options.content
    });
  },
  // 监听标题输入框的输入事件，更新 data 中的值
  onInputChange: function(e) {
    this.setData({
      textareaValue: e.detail.value
    });
  }
})