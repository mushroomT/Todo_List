// pages/add_task/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    starttime: "0", endtime: "24", task: ""
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  setstarttime: function (e) {
    this.data.starttime = e.detail.value;
  },
  setendtime: function (e) {
    this.data.endtime = e.detail.value;
  },
  settask: function (e) {
    this.data.task = e.detail.value;
  },
  cancel: function () {
    wx.redirectTo({
      url: '../demo/index'
    })
  },
  update: function () {
    wx.redirectTo({
      url: '../demo/index?task=' + this.data.task + "&starttime="+this.data.starttime+"&endtime="+this.data.endtime
    })
  }
})