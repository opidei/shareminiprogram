Page({

    data: {
        piker: false,
        columns: ['全部可见', '指定可见', '指定不可见'],
    },

    onClickLeft() {
        wx.navigateBack({
            delta: 1
        });
    },
    selectRange() {
        this.setData({
            picker: true
        })
    },
    onChange() {
        this.setData({
            picker: false
        })
    },
    onClose() {
        this.setData({
            picker: false
        })
    }
})