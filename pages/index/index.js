// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 0
  },
  // 事件处理函数
  bindViewTap () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad () {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onChange(event) {
    this.setData({ active: event.detail });
  },
})
