// pages/my/my.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  onLoad: function (options) {
    var that = this;
    //自定义头部方法
    that.setData({
      userInfo: App.globalData.userInfo
    });
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
