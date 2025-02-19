Page({
  /**
   * 页面的初始数据
   */
  data: {
    title: '',
    content: '',
    isPopupShow: false,
    isReplyPopupShow: false,
    comment: '',
    reply: '',
    comments: [],
    textareaValue: '',
    replyValue: '',
    replyIndex: -1
  },
  ButtonAddPost() {
    this.setData({
      isPopupShow: true
    });
  },

  // 输入框内容变化时更新评论数据
  onInputChange1(e) {
    this.setData({
      comment: e.detail.value,
      textareaValue: e.detail.value
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
    const newComments = [...this.data.comments, { comment: comment, replies: [] }];
    this.setData({
      comments: newComments,
      comment: '',
      textareaValue: '',
      isPopupShow: false
    });
  },

  // 关闭弹出层
  closePopup() {
    this.setData({
      isPopupShow: false,
      comment: '',
      textareaValue: ''
    });
  },

  // 打开回复弹出层
  openReplyPopup(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      isReplyPopupShow: true,
      replyIndex: index
    });
  },

  // 输入框内容变化时更新回复数据
  onReplyInputChange(e) {
    this.setData({
      reply: e.detail.value,
      replyValue: e.detail.value
    });
  },

  // 发送回复
  sendReply() {
    const reply = this.data.reply;
    const index = this.data.replyIndex;
    if (reply.length > 100) {
      wx.showToast({
        title: '回复过长',
        icon: 'none'
      });
      return;
    }
    if (reply.trim() === '') {
      wx.showToast({
        title: '回复不能为空',
        icon: 'none'
      });
      return;
    }
    const newComments = [...this.data.comments];
    if (!newComments[index].replies) {
      newComments[index].replies = [];
    }
    newComments[index].replies.push(reply);
    this.setData({
      comments: newComments,
      reply: '',
      replyValue: '',
      isReplyPopupShow: false,
      replyIndex: -1
    });
  },

  // 关闭回复弹出层
  closeReplyPopup() {
    this.setData({
      isReplyPopupShow: false,
      reply: '',
      replyValue: '',
      replyIndex: -1
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