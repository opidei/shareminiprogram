// pages/index/find.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    friends() {
      wx.navigateTo({
        url: '/pages/friends/friends'
      })
    },
    publish() {
      wx.navigateTo({
        url: '/pages/publish/publish'
      })
    }
  }
})
