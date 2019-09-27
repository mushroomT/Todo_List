// pages/demo/index.js
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    listData:[],
    date: 0
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
      if(options.task){
        app.listData.push(options);
      }
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
    this.setData({
      date: (new Date()).toLocaleString(),
      listData: app.listData
    })
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

  bindViewTap: function () {
    wx.redirectTo({
      url: '../add_task/index'
    })
  },

  bindremove: function(){
  app.listData = [{ "starttime": "起始时间", "endtime": "结束时间", "task": "任务名" }];
    wx.redirectTo({
      url: '../demo/index'
    })
  }
})