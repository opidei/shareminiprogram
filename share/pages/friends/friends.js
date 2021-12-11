// pages/friends/friends.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onClickLeft() {
    wx.navigateBack({
      delta:1
   })
  },
  onClickRight() {
    wx.showToast({ title: '点击按钮', icon: 'none' });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})