// pages/addPost/addPost.js
Page({
  data: {
    textareaValue: ''
  },
  goBack: function() {
    wx.redirectTo({
      url: '/pages/discuss/discuss'
    })
  },
  submitForm: function() {
    // 获取 textarea 的值
    const textareaValue = this.data.textareaValue;
    // 判断 textarea 的值是否为空
    if (textareaValue.trim().length === 0) {
      // 若为空，弹出提示框
      wx.showToast({
        title: '内容字数不得少于 1',
        icon: 'none'
      });
      return;
    }
    // 若不为空，处理表单提交逻辑
    wx.showToast({
      title: '提交成功',
      icon: 'success',
      duration: 1500, // 提示框显示的时长，默认是 1500 毫秒，这里设置为 2000 毫秒
      success: function () {
        setTimeout(function () {
          wx.redirectTo({
            url: '/pages/discuss/discuss'
          });
        }, 1500); // 这里的延迟时间要和上面的 duration 保持一致
      }
    });
    // 保存新帖子数据到本地存储
    wx.setStorageSync('newPost', {
      title: '新标题',
      content: textareaValue
    });
    // 这里可以添加更多表单提交后的逻辑，例如发送请求等
  },
  // 监听 textarea 的输入事件，更新 data 中的值
  onTextareaInput: function(e) {
    this.setData({
      textareaValue: e.detail.value
    });
  }
});