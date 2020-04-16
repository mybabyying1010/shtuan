// pages/index/index_deta.js
Page({
  data: {
    // 图片
    swiperList:"",
    endTime: '2020-11-22 10:40:30',//2018/11/22 10:40:30这种格式也行, //结束时间
    // 步进器数量
    num:"1",
    // 立即购买
    show:false,
    // 购买按钮颜色
    color:"red",
    color_bottom:"red",
    // 确定按钮禁用
    disabled:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.countDown();
    that.setData({
      // 商品详情信息
      shopping_name:wx.getStorageSync('shopping_name'),
      shopping_price:wx.getStorageSync('shopping_price'),
      shopping_num:wx.getStorageSync('shopping_num'),
      shopping_ms:wx.getStorageSync('shopping_ms'),
      shopping_bq:wx.getStorageSync('shopping_bq'),
      swiperList:wx.getStorageSync('shopping_url')
    })
  },
  countDown:function(){
    var that=this;
    var nowTime = new Date().getTime();//现在时间（时间戳）
    var endTime = new Date(that.data.endTime).getTime();//结束时间（时间戳）
    var time = (endTime-nowTime)/1000;//距离结束的毫秒数
    // 获取天、时、分、秒
    let day = parseInt(time / (60 * 60 * 24));
    let hou = parseInt(time % (60 * 60 * 24) / 3600);
    let min = parseInt(time % (60 * 60 * 24) % 3600 / 60);
    let sec = parseInt(time % (60 * 60 * 24) % 3600 % 60);
    // console.log(day + "," + hou + "," + min + "," + sec)
    day = that.timeFormin(day),
    hou = that.timeFormin(hou),
    min = that.timeFormin(min),
    sec = that.timeFormin(sec)
    that.setData({
      day: that.timeFormat(day),
      hou: that.timeFormat(hou),
      min: that.timeFormat(min),
      sec: that.timeFormat(sec)
    })
    // 每1000ms刷新一次
    if (time>0){
      that.setData({
        countDown: true
      })
      setTimeout(this.countDown, 1000);
    }else{
      that.setData({
        countDown:false
      })
    }
  },
  //小于10的格式化函数（2变成02）
  timeFormat(param) {
    return param < 10 ? '0' + param : param;
  },
  //小于0的格式化函数（不会出现负数）
  timeFormin(param) {
    return param < 0 ? 0: param;
  },
  // 购买函数
    // 首页
    onClickIcon() {
      wx.switchTab({
        url: '../index/index'
      })
    },
    // 购买
    onClickButton(){
      var that = this
      that.setData({
      show:true
    })
    },
    onClose() {
    this.setData({ show: false });
  },
    // 立即购买确定按钮
    shopping_gm(){
      wx.navigateTo({
        url: '../order/order',
      })
    },
    //步进器监听事件
    onChange(event) {
      wx.setStorageSync('shoppingNum', event.detail)
      // console.log(wx.getStorageSync('shoppingNum'))
    },
    // 按钮颜色
    fen(){
      var that = this
      if(that.data.color == "red" ){
        that.setData({
          color:"#AAAAAA",
          color_bottom:"#AAAAAA",
          disabled:true
        })
      }else{
        that.setData({
          color:"red",
          color_bottom:"red",
          disabled:false
        })
      }
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