var Home = Vue.extend({
	template: "<div class='color'><div class='int'><div id='juz'><input type='text' placeholder='请输入优惠卷' /><span><a href='gwcadd.html' style='color: #f2f2f2;'>兑换</a></span></div></div><div class='manjian'><img src='img/youhuiquan-di@2x.png.png'/><div class='mj'><span>满减卷</span></div><div class='sy'><div class='h1'><h1 style='display: inline-block;color: #808080;'>满99减20</h1><a href='gwcadd.html'><span class='ljsy'>立即使用</span></a></div><p>使用范围：商城</p><p>有效期：2017.08.13-2017.08.19</p><p>使用说明：单笔满99元可用</p></div></div><div class='manjian'><img src='img/youhuiquan-di@2x.png.png'/><div class='mj'><span>满减卷</span></div><div class='sy'><div class='h1'><h1 style='display: inline-block;color: #808080;'>满199减100</h1><a href='gwcadd.html'><span class='ljsy'>立即使用</span></a></div><p>使用范围：商城</p><p>有效期：2017.08.13-2017.08.19</p><p>使用说明：单笔满99元可用</p></div></div></div>"
})
var List = Vue.extend({
	template:"<div class='back'><img src='img/meiyouxiaoxi@2x.png'><p>你尚未使用优惠券哟~</p><div>"
})
var Product = Vue.extend({
	template: "<div class='manjian'><img src='img/youhuiquan-di@2x.png.png'/><div class='mj'><span>满减卷</span></div><div class='sy'><div class='h1'><h1 style='display: inline-block;color: #808080;'>满99减20</h1><a href='gwcadd.html'><span class='ljsyscond'>已失效</span></a></div><p>使用范围：商城</p><p>有效期：2017.08.13-2017.08.19</p><p>使用说明：单笔满99元可用</p></div></div>"
})

Vue.component('home', Home)
Vue.component('list', List)
Vue.component('product', Product)

var app = new Vue({
	el: '#app',
	data: {
		view: 'list'
	}
})

// 路由
var route = function () {
	// 通过window.location.hash=hash这个语句来调整地址栏的地址，使得浏览器里边的“前进”、“后退”按钮能正常使用
	// （实质上欺骗了浏览器）。然后再根据hash值的不同来显示不同的面板
	// 每次当hash改变的时候，我们要将它获取出来，根据hash值来渲染页面
	// #list =》 list
	var hash = location.hash.slice(1);
	console.log(hash)
	console.log(location.hash)
	// 根据hash值选择视图组件
	app.view = hash || 'home';
}

// 对hash改变注册事件
window.addEventListener('hashchange', route) //hashchange
window.addEventListener('load', route)