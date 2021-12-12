// pages/index/user.js
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
    navHeight: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    mysource() {
      wx.navigateTo({
        url: '/pages/mysource/mysource'
      })
    }
  },
  attached() {
    const systemInfo = wx.getSystemInfoSync(); // 获取设备信息
    const statusHeight = systemInfo.statusBarHeight // 状态栏高度
    this.setData({
      navHeight: statusHeight
    })
  }
})
