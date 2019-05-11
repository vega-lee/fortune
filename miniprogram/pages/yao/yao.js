// pages/testting/shaky/shaky.js
Page({
  data: {
    isShow: false,
    list: [],
    content: [
      {
        title: '小程序答题01',
      },
      {
        title: '小程序答题02',
      },
      {
        title: '小程序答题03',
      },
      {
        title: '小程序答题04',
      },
      {
        title: '小程序答题05',
      },
      {
        title: '小程序答题06',
      },
      {
        title: '员工活动羽毛球赛实施07',
      },
      {
        title: '员工活动羽毛球赛实施08',
      },
      {
        title: '员工活动羽毛球赛实施09',
      },
      {
        title: '员工活动羽毛球赛实施10',
      },
    ],
  },


  /**
     * 生命周期函数--监听页面显示
     */
  onShow: function () {
    var that = this;
    this.isShow = true;
    wx.onAccelerometerChange(function (e) {
      if (!that.isShow) {
        return
      }
      console.log(e.x)
      console.log(e.y)
      if (e.x > 1 && e.y > 1) {
        wx.showToast({
          title: '摇成功啦',
          icon: 'success',
          duration: 1000
        })
        let bianlian = that.data.content
        let contentlengths = bianlian.length
        let list = [];
        let random = bianlian[Math.floor(Math.random() * contentlengths)];
        list.push(random);
        that.setData({
          list: list
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.isShow = false;
  }
})