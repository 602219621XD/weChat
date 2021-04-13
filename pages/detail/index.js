// pages/detail/index.js
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news_title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    this.getNews(id);
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

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () { 

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  getNews(id){
    wx.request({
      url: 'http://182.92.120.91:1337/newscenters?id='+id,
      success:(result)=>{
      let resulttemp = result.data[0].detail;
      let prefix = resulttemp.replace( /!.+\(/g,
        "<img src=http://182.92.120.91:1337");
      let suffix= prefix.replace(/\)/g, " />");
      let line = suffix.replace(/\n/g, "<br/>");
     
      // result.data[0].detail=line;
      var that = this;
      WxParse.wxParse('detail', 'html', line, that, 10);
        this.setData({
        news_title:result.data[0].title 

         } )
      }
    })
  },
})