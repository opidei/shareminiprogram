Page({
    data: {
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
    onClickLeft() {
        wx.navigateBack({
            delta: 1
        })
    },
})