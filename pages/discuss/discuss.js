// pages/discuss/discuss.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    rectangleData: [],
    allData: []
  },

  ButtonAddPost: function() {
    wx.navigateTo({
      url: '/pages/addPost/addPost'
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.generateRandomData();
    this.updateRectangleData();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    const newPost = wx.getStorageSync('newPost');
    if (newPost) {
      this.updateFirstRectangle(newPost);
      wx.removeStorageSync('newPost');
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.generateRandomData();
    this.updateRectangleData();
    wx.stopPullDownRefresh();
  },

  /**
   * 生成随机数据
   */
  generateRandomData() {
    const allData = [];
    const colors = ['red', 'green', 'blue', 'cyan'];
    for (let i = 0; i < 8; i++) {
      allData.push({
        title: `标题${i + 1}`,
        content: `正文内容${i + 1}，这是一段示例文本，用于展示矩形区域的显示效果。`,
        color: colors[i % 4]
      });
    }
    this.setData({ allData });
  },

  /**
   * 更新矩形区域的数据
   */
  updateRectangleData() {
    const { allData } = this.data;
    const randomIndices = [];
    while (randomIndices.length < 5) {
      const randomIndex = Math.floor(Math.random() * allData.length);
      if (!randomIndices.includes(randomIndex)) {
        randomIndices.push(randomIndex);
      }
    }
    const rectangleData = randomIndices.map(index => allData[index]);
    this.setData({ rectangleData });
  },

  /**
   * 更新第一个矩形区域的数据
   */
  updateFirstRectangle(newPost) {
    const { rectangleData } = this.data;
    rectangleData[0] = {
      ...newPost,
      color: 'red'
    };
    this.setData({ rectangleData });
  },

  /**
   * 导航到详情页面
   */
  navigateToDetail(e) {
    const index = e.currentTarget.dataset.index;
    const { rectangleData } = this.data;
    const item = rectangleData[index];
    wx.navigateTo({
      url: `/pages/detail/detail?title=${item.title}&content=${item.content}`
    });
  }
})