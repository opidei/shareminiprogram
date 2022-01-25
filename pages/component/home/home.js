// pages/index/home.js
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
    activeNames: ['1'],
    category: [{
      icon: "photo-o",
      text: "二手",
      url: ""
    }, {
      icon: "photo-o",
      text: "服务",
      url: ""
    }, {
      icon: "photo-o",
      text: "资源",
      url: ""
    }],
    goods: [{
      imgurl: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      tag: "电子",
      price: "2000",
      desc: "描述这个东西",
      title: "一个小东西",
      from: '张三',
      num: 1,
      status: '未出手'
    }, {
      imgurl: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      tag: "",
      price: "2000",
      desc: "描述这个东西",
      title: "一个小东西",
      from: '李四',
      num: 1,
      status: '共享给张三'
    }, {
      imgurl: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      tag: "",
      price: "2000",
      desc: "描述这个东西",
      title: "一个小东西",
      from: '王五',
      num: 1,
      status: '未出手'
    }, {
      imgurl: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      tag: "电子",
      price: "2000",
      desc: "描述这个东西",
      title: "一个小东西",
      from: '朱六',
      num: 1,
      status: '出售给李四'
    }, {
      imgurl: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      tag: "电子",
      price: "2000",
      desc: "描述这个东西",
      title: "一个小东西",
      from: '赵七',
      num: 1,
      status: '出售给李四'
    }, {
      imgurl: "https://img01.yzcdn.cn/vant/ipad.jpeg",
      tag: "电子",
      price: "2000",
      desc: "描述这个东西",
      title: "一个小东西",
      from: '陈八',
      num: 1,
      status: '未分享'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        activeNames: event.detail,
      });
    },
    detail() {
      wx.navigateTo({
        url: '/pages/items/detail'
      })
    }
  }
})
