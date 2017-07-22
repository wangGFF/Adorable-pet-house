var Dog = Vue.extend({
	template: "<div class='My_COllEction' id='My_COllEction'><div class='My_COllEction1'><p>汪的挑食启示录</p><div id='gefu'></div><img src='img/矢量智能对象1@2x.png'> <span>30996</span> <span>丁雨风</span> <span>6天前</span><div id='gefu'></div><p>分享宠物日常：“你家狗狗好乖哦”、“我家狗狗要是吃饭也么省心就好了”等等。欢妈的确从不担心，。。。。</p></div><div class='My_COllEction1'><p>最不爱看镜头的猫猫</p><div id='gefu'></div><img src='img/矢量智能对象1@2x.png'> <span>30996</span> <span>丁雨风</span> <span>6天前</span><div id='gefu'></div><p>分享宠物日常：“你家狗狗好乖哦”、“我家狗狗要是吃饭也么省心就好了”等等。欢妈的确从不担心，。。。。</p></div></div>"
})
var Cat = Vue.extend({
	template: "<div class='My_COLLECTION' id='My_Collection'><div class='My_COLLECTION1'><img src='img/shangpin@2x.png'><div class='My_COLLECTION2'><p>【618秒杀】爱倍宠物狗主粮</p> <p>5片</p> <p>￥2.00</p></div></div><div class='My_COLLECTION1'><img src='img/shangpin@2x.png'><div class='My_COLLECTION2'><p>【618秒杀】爱倍宠物狗主粮</p> <p>5片</p> <p>￥2.00</p></div></div></div>"
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
