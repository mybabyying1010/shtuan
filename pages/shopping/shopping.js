// pages/shopping/shopping.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopping_list:[
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0Aua8muQIEMcf6mr7lO2wzIrmTRFrDsC3pMcb8E9R8SgXWRp5iAvTilZN8iS5CcXLg!!/b&bo=9AGaAgAAAAARB10!&rf=viewer_4&t=5",
        name:"老北京 加馅软麻花",
        price:"21.8",
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmetv89d6XziWzNNKJFuoslYiWnAdg11uE9l.t2MW*W4gfeqIl6Zoz2YRbbrPYFPGRZwhO5JHnmOT4xINGkiQI5BQ!/b&bo=9AFPAQAAAAARF5s!&rf=viewer_4&t=5",
        name:"鲜生活 6mm宽面条",
        price:"1.59",
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmej9eyqzZRnzL5Uym*depm5dhqgs1G*kdP64uukqxLHEaHsqnKk40gwjisZcc4rErxwNKcf8fhlARtZp9f520JFU!/b&bo=9AEsAQAAAAARF*g!&rf=viewer_4&t=5",
        name:"老北京 豆芽350g",
        price:"1.8",
      }
    ],
    // 共计
    gj_num:"",
    gj_price:"1",
    value:"1",
    // 共计价格
    shopping_gj:[],
    // 共计数量
    shopping_num:[]
  },
  // 步进器事件
  onChange(e){
    console.log(e)
    var that = this
    for(let i in that.data.shopping_list){
      if(e.currentTarget.dataset.name == that.data.shopping_list[i].name){
        that.data.shopping_gj[i] = parseFloat(e.detail) * parseFloat(that.data.shopping_list[i].price) 
        that.data.shopping_num[i] = parseFloat(e.detail)
        // console.log(that.data.shopping_num)
      }else if(that.data.shopping_gj[i] == undefined){
        that.data.shopping_gj[i] =0
        that.data.shopping_num[i] =0
      }
    }
    // console.log(that.data.shopping_gj)
    // console.log(that.data.shopping_num)
      var price = 0
      var num = 0
      for(let i in that.data.shopping_gj){
        price += parseFloat(that.data.shopping_gj[i])
        num += parseFloat(that.data.shopping_num[i])
      }
      // 输出价格和数量
      that.setData({
        gj_price:price.toFixed(2),
        gj_num:num
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 价格数量初始值
    var that= this
    var price_init = 0
    var num_init = 0
    for(let i in that.data.shopping_list){
      price_init +=parseFloat(that.data.shopping_list[i].price)
      num_init +=parseFloat(i++)
  }
    that.setData({
      gj_num:num_init,
      gj_price:price_init
    })
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