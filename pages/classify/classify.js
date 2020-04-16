// pages/classify/classify.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active:0,
    currentTab:0,
    // 为您推荐
    shopping:[
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0Aua8muQIEMcf6mr7lO2wzIrmTRFrDsC3pMcb8E9R8SgXWRp5iAvTilZN8iS5CcXLg!!/b&bo=9AGaAgAAAAARB10!&rf=viewer_4&t=5",
        name:"老北京 加馅软麻花",
        ms:"【2020.3.30】60天短保…",
        bq:"次日达",
        price:"21.8",
        num:"3120"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmetv89d6XziWzNNKJFuoslYiWnAdg11uE9l.t2MW*W4gfeqIl6Zoz2YRbbrPYFPGRZwhO5JHnmOT4xINGkiQI5BQ!/b&bo=9AFPAQAAAAARF5s!&rf=viewer_4&t=5",
        name:"鲜生活 6mm宽面条",
        ms:"新鲜好生活",
        bq:"次日达",
        price:"1.59",
        num:"532"
      },
      // {
      //   url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmej9eyqzZRnzL5Uym*depm5dhqgs1G*kdP64uukqxLHEaHsqnKk40gwjisZcc4rErxwNKcf8fhlARtZp9f520JFU!/b&bo=9AEsAQAAAAARF*g!&rf=viewer_4&t=5",
      //   name:"老北京 豆芽350g",
      //   ms:"新鲜好生活",
      //   bq:"次日达",
      //   price:"1.8",
      //   num:"2120"
      // },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmerFi4rVtvaNdazR9jXiKImfC9OKCccTpF97FMnOu7wiKm1X9whpxc0DU*g5e6U0zNkfHcsJIK1U7Zg5xqteWaTQ!/b&bo=9AFIAQAAAAARF5w!&rf=viewer_4&t=5",
        name:"世通 豆浆250ml",
        ms:"营养健康每一天",
        bq:"次日达",
        price:"2.5",
        num:"2504"
      }
      // {
      //   url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmehIfh.5WhqzW9iHCSj5Mv1887JTWd1T4kxgqrAnrk9lm*Otp10XqXzTvb*FVgNn*hrhEFe0edvZgR9YQYKPkjk0!/b&bo=XgHIAAAAAAARF7c!&rf=viewer_4&t=5",
      //   name:"九丰 藤椒鸡排",
      //   ms:"酥酥脆脆，好吃又美味",
      //   bq:"次日达",
      //   price:"20.9",
      //   num:"2156"
      // },
      // {
      //   url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmenxYXDz0bZYaZGrJixy6XrQC6wgA2j97CQZOXEMyaqLZezOW3Mj.7ivHSBMDH1Dy4LrJ4jNyAVTiNdH8LZCpETM!/b&bo=9AFWAQAAAAARF4I!&rf=viewer_4&t=5",
      //   name:"世通 内脂豆腐",
      //   ms:"采用非转基因大豆",
      //   bq:"次日达",
      //   price:"1.28",
      //   num:"8087"
      // }
    ],
    // 包邮到家
    shopping_by:[
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0Aua8muQIEMcf6mr7lO2wzIrmTRFrDsC3pMcb8E9R8SgXWRp5iAvTilZN8iS5CcXLg!!/b&bo=9AGaAgAAAAARB10!&rf=viewer_4&t=5",
        name:"老北京 加馅软麻花",
        ms:"【2020.3.30】60天短保…",
        bq:"包邮到家",
        price:"21.8",
        num:"3120"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmetv89d6XziWzNNKJFuoslYiWnAdg11uE9l.t2MW*W4gfeqIl6Zoz2YRbbrPYFPGRZwhO5JHnmOT4xINGkiQI5BQ!/b&bo=9AFPAQAAAAARF5s!&rf=viewer_4&t=5",
        name:"鲜生活 6mm宽面条",
        ms:"新鲜好生活",
        bq:"包邮到家",
        price:"1.59",
        num:"532"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmej9eyqzZRnzL5Uym*depm5dhqgs1G*kdP64uukqxLHEaHsqnKk40gwjisZcc4rErxwNKcf8fhlARtZp9f520JFU!/b&bo=9AEsAQAAAAARF*g!&rf=viewer_4&t=5",
        name:"老北京 豆芽350g",
        ms:"新鲜好生活",
        bq:"包邮到家",
        price:"1.8",
        num:"2120"
      },
      // {
      //   url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmerFi4rVtvaNdazR9jXiKImfC9OKCccTpF97FMnOu7wiKm1X9whpxc0DU*g5e6U0zNkfHcsJIK1U7Zg5xqteWaTQ!/b&bo=9AFIAQAAAAARF5w!&rf=viewer_4&t=5",
      //   name:"世通 豆浆250ml",
      //   ms:"营养健康每一天",
      //   bq:"包邮到家",
      //   price:"2.5",
      //   num:"2504"
      // }
    ]
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      active: id
    });
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