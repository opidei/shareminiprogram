// pages/items/detail.js
Page({

    data: {
        img_urls: [
            'https://img95.699pic.com/photo/50086/5350.jpg_wh300.jpg'
        ]
    },

    onLoad: function (options) {

    },
    onClickLeft() {
        wx.navigateBack({
            delta: 1
        });
    }
})