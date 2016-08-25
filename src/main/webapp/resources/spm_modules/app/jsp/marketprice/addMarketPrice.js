define('app/jsp/marketprice/addMarketPrice', function (require, exports, module) {
    'use strict';
    var $=require('jquery'),
	    Widget = require('arale-widget/1.2.0/widget'),
	    Dialog = require("optDialog/src/dialog"),
	    Paging = require('paging/0.0.1/paging-debug'),
	    AjaxController = require('opt-ajax/1.0.0/index');
    require("jsviews/jsrender.min");
    require("jsviews/jsviews.min");
	require("my97DatePicker/WdatePicker");
    require("bootstrap-paginator/bootstrap-paginator.min");
    require("app/util/jsviews-ext");
    
    require("opt-paging/aiopt.pagination");
    require("twbs-pagination/jquery.twbsPagination.min");
    var SendMessageUtil = require("app/util/sendMessage");
    
    //实例化AJAX控制处理对象
    var ajaxController = new AjaxController();
    //优先级重复添加控制
    var priorityString = "";
    //定义页面组件类
    var addMarketPricePager = Widget.extend({
    	
    	Implements:SendMessageUtil,
    	//属性，使用时由类的构造函数传入
    	attrs: {
    	},
    	Statics: {
    	},
    	//事件代理
    	events: {
    		//保存
    		"click #submitSaveBtn":"_saveMarketPrice",
    		"click #successBtn":"_goBack",
        },
    	//重写父类
    	setup: function () {
    		addMarketPricePager.superclass.setup.call(this);
    	},
    	
    	//保存
    	_saveMarketPrice:function(){
    		var _this=this;
    		var productId = $("#productId").val();
    		var marketPrice=$("#marketPrice").val();
    		
    		ajaxController.ajax({
				type: "post",
				processing: true,
				message: "数据更新中,请等待...",
				
				url: _base+"/marketpricequery/updateMarketPrice",
				
				data:{"productId":productId,"marketPrice":marketPrice},
				success: function(data){
					if("1"===data.statusCode){
						//window.location.reload();
						_this._showConf();
						//_this._showMsg();
						//window.history.go(-1)
					}
				}
			});
    	},
    	
    	//确认提示框
		_showConf:function(){
			$('#eject-mask').fadeIn(100);
			$('#aband-small').slideDown(200);
		},
		
    	//返回之前的页面
    	_goBack:function(){
    		window.history.go(-1);
    	},
    	//滚动到顶部
    	_returnTop:function(){
    		var container = $('.wrapper-right');
    		container.scrollTop(0);//滚动到div 顶部
    	},
    	
    });
    
    module.exports = addMarketPricePager;
});