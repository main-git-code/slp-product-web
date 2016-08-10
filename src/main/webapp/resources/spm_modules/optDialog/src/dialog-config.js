// artDialog - 默认配置
define({

    /* -----已注释的配置继承自 popup.js，仍可以再这里重新定义它----- */

    // 对齐方式
    //align: 'bottom left',
    
    // 是否固定定位
    //fixed: false,
    
    // 对话框叠加高度值(重要：此值不能超过浏览器最大限制)
    //zIndex: 1024,

    // 设置遮罩背景颜色
    backdropBackground: '#000',

    // 设置遮罩透明度
    backdropOpacity: 0.7,

    // 消息内容
    content: '<span class="ui-dialog-loading">Loading..</span>',
    
    // 标题
    title: '',

    // 对话框状态栏区域 HTML 代码
    statusbar: '',
    
    // 图标
    icon: '',
    
    // 自定义按钮
    button: null,
    
    // 确定按钮回调函数
    ok: null,
    
    // 取消按钮回调函数
    cancel: null,

    // 确定按钮文本
    okValue: 'ok',
    
    // 取消按钮文本
    cancelValue: 'cancel',

    cancelDisplay: true,
    
    // 内容宽度
    width: '',
    
    // 内容高度
    height: '',
    
    // 内容与边界填充距离
    padding: '',
    
    // 对话框自定义 className
    skin: '',

    // 是否支持快捷关闭（点击遮罩层自动关闭）
    quickClose: false,

    // css 文件路径，留空则不会使用 js 自动加载样式
    // 注意：css 只允许加载一个
    cssUri: '../css/ui-dialog.css',

    // 模板（使用 table 解决 IE7 宽度自适应的 BUG）
    // js 使用 i="***" 属性识别结构，其余的均可自定义
    innerHTML:
        '<div i="dialog" class="ui-eject-big">'
        +	'<div class="ui-eject-samll">'
        +		'<div i="header" class="ui-eject-samll-title">'
		+			'<p i="title"></p>'
		+			'<p i="close" class="img"><A href="#"></A></p>'
		+		'</div>'
		+		'<div i="body" class="ui-eject-medium-list">'
		+			'<div class="ui-eject-medium-complete">'
		+				'<div i="icon" src=""></div>'
		+				'<p i="content" class="word"></p>'
		+			'</div>'
		+		'</div>'	
		+		'<div i="footer" class="ui-eject-samll-confirm">'
		+			'<ul>'
		+				'<li i="button"></li>'		
		+			'</ul>'
		+		'</div>'
		+	'</div>'	
		+	'<div class="ui-eject-mask"></div>'	
		+'</div>'
    
});