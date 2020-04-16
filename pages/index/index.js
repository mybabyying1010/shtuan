const App = getApp();//设立顶部栏高度
Page({
	data:{
    // 分享好友
    show: false,
    // 轮播
    swiperList:[
      "http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0PNEqrASnVQERJMp8LX7YTKkrJXj1ZGkGwQyWwJz2fdKOLDCNPTmKe5wSNKCmxOEaQ!!/b&bo=bwfQAgAAAAARB4o!&rf=viewer_4&t=5",
      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmekMRVBAsnZhf97rGMzOprypCXkCRPXX0xKalfVRQ11ujkatIdb8RqcvIzEWCRscxrToIBBlvrOlNscAvh3TF7is!/b&bo=kgL1AAAAAAARF0U!&rf=viewer_4&t=5",
      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmelb3yqhyufyRgW49mdxESp1kp2cumdJSqM7HKHE3Z5aUK95ftS.maavlVzgygxB0JEd2Hf25B38vmjha68plk4U!/b&bo=kgLAAAAAAAARF3A!&rf=viewer_4&t=5",
      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmesgqqFT5qG5cUSBrFL52X9VNzWkeL3sl6Ns0EYXt4ev5y25AEReMeKs9GflvmDK40jd90DzIWyB3lqEcAs66OPw!/b&bo=kgLrAAAAAAARF1s!&rf=viewer_4&t=5"
    ],
    // 倒计时
    endTime: '2021-4-22 10:40:30', //结束时间
    // 团购导航栏
    nav:[
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0Fadz0JyWTTaQe9ziBz7K8NNlujlbpob0rAxatOojcjD1n4RofwMllVp55XANyAcgQ!!/b&bo=FgNNAgAAAAARB2o!&rf=viewer_4&t=5",
        name:"新鲜蔬菜"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmelCndWlvaNqVR9hwK5XdWuYbpa7GzzvThlWrgihQJmfnyeEwiaevzX9wPTMguxsRfesO3A0op0HehVOmNPKFWZc!/b&bo=gAKnAQAAAAARFwQ!&rf=viewer_4&t=5",
        name:"时令水果"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmegdf*LmDaJtWI1RVPg6peG8qDaqrWY0YtFnjUMGxNLhxUd.jRpgPiRMuOIAHQo6vSeAfei3PxKV5u3ASoKeKraY!/b&bo=oAWEAwAAAAARFwI!&rf=viewer_4&t=5",

        name:"水产冷品"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmem8a9ylu3mgLwwW2I8z4.oVdYZXUvLzlEZQsG1VGJQWK.d3.wCod7TQaWv7CCYI0uqPEjad2a4UdUUsGqfw6A9E!/b&bo=AAQSAwAAAAARFzU!&rf=viewer_4&t=5",

        name:"肉禽蛋品"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmeo2e0qguWUl719lALm5DBPVKuUbSccOh2CdVU76pfTyGU*F7erNo9UOVYjdgK5ljtI.2Y0AmxPfQb*F2.DZG0fc!/b&bo=7gItAgAAAAARF.M!&rf=viewer_4&t=5",

        name:"居家百货"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmen0iHjzmsTq3YTQFObjvGeFPU1vMtoyYtK8CDdZwOmuyUriNBRl0I95zO220oaP2B64EHGATWgrjaasnK8tpIBw!/b&bo=.AL4AgAAAAARFyA!&rf=viewer_4&t=5",

        name:"酒水乳品"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmeicXqa5mtBUkQpjgldZK.h3OfSxZfhe4Rji8ISUuv6hFDpnlW2gpu*dLqAnxwFZ6PXD5VrQadH.BDX.6qR4FxM8!/b&bo=AASqAgAAAAARF4w!&rf=viewer_4&t=5",

        name:"鲜花绿植"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmelmr8pQVqZotFz1zbEtsPxWsB0nI2i.T9*HgeI2iTXO*Xl5UkP1HztaroRjT5vxoMyA*db.spOKjQK8vtaXDEFM!/b&bo=kgK4AQAAAAARFwk!&rf=viewer_4&t=5",
        name:"粮油调味"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmejIEsD1Q*tJvZxGrSdXmoYcZtkjihGj1*GgMR601nPn8rO96Q6UGqqjhkVxmZ5vrbUN5J.beKxs.Ew63TSjCwxE!/b&bo=VALAAQAAAAARF7c!&rf=viewer_4&t=5",
        name:"休闲食品"
      },
      {
        url:      "http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmeoE.XAWr*t0Oj41YWrsC6L4x5CLgbwNC.xO2PfNBFrCa3ur43MPQ7n.AI1.Zpl5fVn0XQhPf4ucAClIaJ7NYkfI!/b&bo=qAL.AQAAAAARF3U!&rf=viewer_4&t=5",
        name:"邀请有礼"
      }
    ],
    // 限时秒杀
    shopping_url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0AiquAwEa*cVm*3yX8C6Lq4vf.ZxYvx9dh6SScEcIWbb02NJm5tEX3.EDG8NzTbU3g!!/b&bo=9AFOAQAAAAARB4o!&rf=viewer_4&t=5",
    shopping_name:"正是 特质黑椒牛排",
    shopping_ms:"品质生活，好牛排",
    shopping_price:"5.99",
    shopping_jd:"100",
    shopping_num:"1819",
    shopping_but:"抢光了",
    // 商品标签栏
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
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmej9eyqzZRnzL5Uym*depm5dhqgs1G*kdP64uukqxLHEaHsqnKk40gwjisZcc4rErxwNKcf8fhlARtZp9f520JFU!/b&bo=9AEsAQAAAAARF*g!&rf=viewer_4&t=5",
        name:"老北京 豆芽350g",
        ms:"新鲜好生活",
        bq:"次日达",
        price:"1.8",
        num:"2120"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmerFi4rVtvaNdazR9jXiKImfC9OKCccTpF97FMnOu7wiKm1X9whpxc0DU*g5e6U0zNkfHcsJIK1U7Zg5xqteWaTQ!/b&bo=9AFIAQAAAAARF5w!&rf=viewer_4&t=5",
        name:"世通 豆浆250ml",
        ms:"营养健康每一天",
        bq:"次日达",
        price:"2.5",
        num:"2504"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmehIfh.5WhqzW9iHCSj5Mv1887JTWd1T4kxgqrAnrk9lm*Otp10XqXzTvb*FVgNn*hrhEFe0edvZgR9YQYKPkjk0!/b&bo=XgHIAAAAAAARF7c!&rf=viewer_4&t=5",
        name:"九丰 藤椒鸡排",
        ms:"酥酥脆脆，好吃又美味",
        bq:"次日达",
        price:"20.9",
        num:"2156"
      },
      {
        url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmenxYXDz0bZYaZGrJixy6XrQC6wgA2j97CQZOXEMyaqLZezOW3Mj.7ivHSBMDH1Dy4LrJ4jNyAVTiNdH8LZCpETM!/b&bo=9AFWAQAAAAARF4I!&rf=viewer_4&t=5",
        name:"世通 内脂豆腐",
        ms:"采用非转基因大豆",
        bq:"次日达",
        price:"1.28",
        num:"8087"
      }
    ],
    //地址
    address:"点击获取地址"
  },
	onLoad: function (options) {
    var that = this;
    //开始分享好友功能
    wx.showShareMenu({
      withShareTicket: true
    });
    that.countDown()
    //自定义头部方法
    that.setData({
      navH: App.globalData.navHeight,
      userInfo: App.globalData.userInfo
    });
  },
// 商品详情
ms_but(e){
  var that= this
  console.log(e)
  wx.setStorageSync('shopping_name', e.currentTarget.dataset.name)
  wx.setStorageSync('shopping_url', e.currentTarget.dataset.url)
  wx.setStorageSync('shopping_ms', e.currentTarget.dataset.ms)
  wx.setStorageSync('shopping_bq', e.currentTarget.dataset.bq)
  wx.setStorageSync('shopping_num', e.currentTarget.dataset.num)
  wx.setStorageSync('shopping_price', e.currentTarget.dataset.price)
  wx.navigateTo({
    url: '../index/index_deta',
  })
},
// 获取当前位置
wz(){
  var _this = this;
  wx.chooseLocation({
    success: function (res) {
      // var name = res.name
      var address = res.address
      // var latitude = res.latitude
      // var longitude = res.longitude
      _this.setData({
        // name: name,
        address: address,
        // latitude: latitude,
        // longitude: longitude
      })
    }
  }) 
},
//分享好友方法
  fxhy(){
    var that=this;
    that.setData({
      show:true
    })
  },
  onClose() {
    this.setData({ show: false });
  },
  onShareAppMessage: function () {
    return {
      title: '十荟团',
      path: 'pages/index/index',
      success: (res) => {
        // 分享成功
      },
      fail: (res) => {
        // 分享失败
      }
    }
  },
  // 生成海报
  bye: function bye() {
    wx.navigateTo({
      url: '../index_poster/index_poster',
    })
  },
  // 倒计时函数
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
// 限时秒杀函数
jiu(){
  var that = this
  that.setData({
    shopping_url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0AiquAwEa*cVm*3yX8C6Lq4vf.ZxYvx9dh6SScEcIWbb02NJm5tEX3.EDG8NzTbU3g!!/b&bo=9AFOAQAAAAARB4o!&rf=viewer_4&t=5",
    shopping_name:"正是 特质黑椒牛排",
    shopping_ms:"品质生活，好牛排",
    shopping_jd:"100",
    shopping_price:"5.99",
    shopping_num:"1819",
    shopping_but:"抢光了"
  })
},
shisan(){
  var that = this
  that.setData({
    shopping_url:"http://m.qpic.cn/psc?/V12iywoj40T291/qWkkGOdvaHRbO0s2SzmJ0GxZgX0XHDroAIevSabHLk2m5ahxZyW4g.cTcNjZn*n*ae09xe9B8m3go0eLKYAp2A!!/b&bo=TAK8AQAAAAARB8M!&rf=viewer_4&t=5",
    shopping_name:"麦德胜 汉堡包",
    shopping_ms:"代餐饱腹，自然不腻",
    shopping_jd:"50",
    shopping_price:"3.79",
    shopping_num:"608",
    shopping_but:"马上抢"
  })
},
shiqi(){
  var that = this
  that.setData({
    shopping_url:"http://m.qpic.cn/psc?/V12iywoj40T291/OgsY8p8GsL2M2s50.OYmes0ICXK6r4aQH1ErPFgKrkau6uFGT5R9hByHbIWa9RJhYgMo3ODyTObroP.gqYuf5Ibg4Rw8Pmk9yPFNbUZ.xSg!/b&bo=9AFWAQAAAAARF4I!&rf=viewer_4&t=5",
    shopping_name:"袁记 肉夹馍五香味",
    shopping_ms:"吃货觉醒，美味又好吃",
    shopping_jd:"48",
    shopping_price:"1.79",
    shopping_num:"584",
    shopping_but:"马上抢"
  })
}
})
