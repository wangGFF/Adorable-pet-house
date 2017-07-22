var Dog = Vue.extend({
	template: "<div class='My_collec'><img src='img/meiyouxiaoxi@2x.png'><span>你还没有发过任何动态哟~</span></div>"
})
var Cat = Vue.extend({
	template: "<div class='My_collec'><img src='img/meiyouxiaoxi@2x.png'><span>你还没有发过任何动态哟~</span></div>"
})

Vue.component('dog', Dog)
Vue.component('cat', Cat)


var dogcat = new Vue({
	el: '#dogcat',
	data: {
		view: 'dog'
	}
	

})


// 路由
var route = function () {
	// 通过window.location.hash=hash这个语句来调整地址栏的地址，使得浏览器里边的“前进”、“后退”按钮能正常使用
	// （实质上欺骗了浏览器）。然后再根据hash值的不同来显示不同的面板
	// 每次当hash改变的时候，我们要将它获取出来，根据hash值来渲染页面
	// #list =》 list
	var hash = location.hash.slice(1);
	// 根据hash值选择视图组件
	dogcat.view = hash || 'cat';
}
// 对hash改变注册事件
window.addEventListener('hashchange', route) //hashchange
window.addEventListener('load', route)


var A_click = document.getElementsByTagName('a');
var A_click1 = A_click[0];
var A_click2 = A_click[1];
A_click1.addEventListener("touchend", function(){  
     A_click1.style.color = "#df4442";
     A_click2.style.color = "#000";
     A_click1.style.borderBottom="2px solid #df4442";
     A_click2.style.borderBottom="1px solid #eaeaea";
});
A_click2.addEventListener("touchend", function(){  
     A_click2.style.color = "#df4442";
     A_click1.style.color = "#000";
     A_click1.style.borderBottom="1px solid #eaeaea";
     A_click2.style.borderBottom="2px solid #df4442";
});

