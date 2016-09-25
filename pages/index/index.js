//index.js
var helloData={
  name:'keke'
}

Page({
  data:helloData,
  changeName:function(e) {
    if(this.data.name=="World"){
      this.setData({ name:'wechat app' })
    }else {
      this.setData({ name:'sakura' })
    }
    console.log(this.data.name)
  },
  linkAbout:function() {
    wx.navigateTo({
      'url':'../about/about'
    })
  }
})