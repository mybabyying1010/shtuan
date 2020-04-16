// pages/order/order.js
const App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      gj:"1111"
  },
// 获取当前位置
  wz(){
    var _this = this;
    wx.chooseLocation({
      success: function (res) {
        var address = res.address
        _this.setData({
          address: address,
          
        })
      }
    }) 
  },
  // 手动添加地址
  site() {
    wx.getSetting({
      success(res) {
        console.log("vres.authSetting['scope.address']：",res.authSetting['scope.address'])
        if (res.authSetting['scope.address']) {
          console.log("111")
          wx.chooseAddress({
            success(res) {
              console.log(res.userName)
              console.log(res.postalCode)
              console.log(res.provinceName)
              console.log(res.cityName)
              console.log(res.countyName)
              console.log(res.detailInfo)
              console.log(res.nationalCode)
              console.log(res.telNumber)
            }
          })
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              
        } else {
          if (res.authSetting['scope.address'] == false) {
            console.log("222")
            wx.openSetting({
              success(res) {
                console.log(res.authSetting)
              
              }
            })
          } else {
            console.log("eee")
            wx.chooseAddress({
              success(res) {
                console.log(res.userName)
                console.log(res.postalCode)
                console.log(res.provinceName)
                console.log(res.cityName)
                console.log(res.countyName)
                console.log(res.detailInfo)
                console.log(res.nationalCode)
                console.log(res.telNumber)
              }
            })
          }
        }
      }
    })
  },
  // 确认支付
  onSubmit(){
    wx.showToast({
      title: '成功',
      icon: 'succes',
      duration: 1000,
      mask:true
  })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // that.data.gj = "parseFloat(wx.getStorageSync('shopping_price'))  * parseFloat(wx.getStorageSync('shoppingNum'))"
    that.setData({
      // 用户信息
      userInfo: App.globalData.userInfo,
      gj :parseFloat(wx.getStorageSync('shopping_price'))  * parseFloat(wx.getStorageSync('shoppingNum')) *100,
      // 商品详情信息
      shopping_name:wx.getStorageSync('shopping_name'),
      shopping_price:wx.getStorageSync('shopping_price'),
      swiperList:wx.getStorageSync('shopping_url'),
      shoppingNum:wx.getStorageSync('shoppingNum')
    });
    console.log()
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

  }
})