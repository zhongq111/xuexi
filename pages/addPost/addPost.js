// pages/addPost/addPost.js
// pages/addPost/addPost.js
Page({
  data: {
    textareaValue: '',
    titleValue: '' // 新增标题输入框的值
  },
  goBack: function() {
    wx.redirectTo({
      url: '/pages/discuss/discuss'
    })
  },
  submitForm: function() {
    // 获取 textarea 的值
    const textareaValue = this.data.textareaValue;
    const titleValue = this.data.titleValue; // 获取标题输入框的值
    // 判断标题的字符数是否超过 20 个
    if (titleValue.length > 20) {
      // 若超过，弹出提示框
      wx.showToast({
        title: '标题字符数不得超过 20 个',
        icon: 'none'
      });
      return;
    }
    // 判断 textarea 的值是否超过 750 个字符
    if (textareaValue.length > 750) {
      // 若超过，弹出提示框
      wx.showToast({
        title: '正文字符数不得超过 750 个',
        icon: 'none'
      });
      return;
    }
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
      title: titleValue, // 使用输入的标题
      content: textareaValue
    });
    // 这里可以添加更多表单提交后的逻辑，例如发送请求等
  },
  // 监听 textarea 的输入事件，更新 data 中的值
  onTextareaInput: function(e) {
    this.setData({
      textareaValue: e.detail.value
    });
  },
  // 监听标题输入框的输入事件，更新 data 中的值
  onTitleInput: function(e) {
    this.setData({
      titleValue: e.detail.value
    });
  }
});