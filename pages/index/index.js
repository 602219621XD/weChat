// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    swiperList:[],
    cateList:[]
  },
  // 事件处理函数
  bindViewTap() {
    
  },
  onLoad() {
    this.getSwiperList();
    this.getCateList();

  },
  getUserProfile(e) {
    
  },
  getUserInfo(e) {
   
  },
  //获取轮播图
  getSwiperList(){
    wx.request({
      url: 'http://182.92.120.91:1337/sildeshows?id=2',
      success:(result)=>{
      //  console.log(result.data[0].img)
        this.setData({
          swiperList:result.data[0].img

        } )
      }
    })
  },
  getCateList(){
    wx.request({
      url: 'http://182.92.120.91:1337/cates?id=1',
      success:(result)=>{
     // console.log(result.data[0].img)
        this.setData({
          cateList:result.data[0].img

        } )
      }
    })
  }
})
