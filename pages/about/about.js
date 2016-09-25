var aboutData={
  text:'ceshi'
}
Page({
    data:aboutData,
    getout:function() {
        wx.navigateBack()
    },
    inputchange:function(e) {
        this.setData({
            text:e.detail.value
        })
    }
})