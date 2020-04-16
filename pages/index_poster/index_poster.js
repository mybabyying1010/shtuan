// pages/index_poster/index_poster.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    backurl: '../../img/haibao.jpg'	//本地背景图片
  },
  bye() {
    var that = this
    // 获取用户的当前设置
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.showModal({
            title: '您还未授权相册权限',
            content: '点击确认授权',
            success(res) {
              if (res.confirm == true) {
                wx.authorize({
                  scope: 'scope.writePhotosAlbum',
                })
              }
            }
          })
        } else {
          // 把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: that.windowWidth * 1.22, // 截取的画布的宽
            height: that.windowHeight * 1.22, // 截取的画布的高
            destWidth: that.windowWidth * 1.22 * 3, // 保存成的画布宽度
            destHeight: that.windowHeight * 1.22 * 3, // 保存成的画布高度
            fileType: 'png', // 保存成的文件类型
            quality: 1, // 图片质量
            canvasId: 'mycan', // 画布ID
            success(res) {
              // 2-保存图片至相册
              wx.saveImageToPhotosAlbum({ // 存成图片至手机
                filePath: res.tempFilePath,
                success(res2) {
                  wx.showToast({
                    title: '图片保存成功',
                    duration: 2000
                  })
                }
              })
            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this 
    var backurl = that.data.backurl
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        var windowWidth = res.windowWidth
        var windowHeight = res.windowHeight
        that.windowWidth = "width:' " + windowWidth + "upx';"
        that.windowHeight = "height:' " + windowHeight + "upx';"
        // 在画布绘制图像，背景图片宽高为用户手机屏幕宽高，二维码设置居中。
        const ctx = wx.createCanvasContext('mycan')
        ctx.drawImage(backurl, 0, 0, windowWidth, windowHeight)
        ctx.draw() //重绘页面
      }
    })
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