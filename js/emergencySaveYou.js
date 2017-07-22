var Dog = Vue.extend({
	template: "<div class='accident_box'><div id='Accident'>意外事故</div><ul class='accident_content'><li id='gg'>烧伤<img src='img/jinru@2x.png'></li><li>交通事故<img src='img/jinru@2x.png'></li><li>中毒<img src='img/jinru@2x.png'></li><li>溺水<img src='img/jinru@2x.png'></li><li id='zuihou'>电击<img src='img/jinru@2x.png'></li></ul><div id='accident_second'>突发情况</div><ul class='accident_second_content'><li>休克<img src='img/jinru@2x.png'></li><li>抽搐<img src='img/jinru@2x.png'></li><li>晕车<img src='img/jinru@2x.png'></li><li id='zuihou'>癫痫<img src='img/jinru@2x.png'></li></ul><div id='foreign'>异物入侵</div><ul class='foreign_tencont'><li>眼睛异物<img src='img/jinru@2x.png'></li><li>肢体异物<img src='img/jinru@2x.png'></li><li>主干异物<img src='img/jinru@2x.png'></li><li>胃部异物<img src='img/jinru@2x.png'></li><li id='zuihou'>腿部异物<img src='img/jinru@2x.png'></li></ul><div>"
})
var Cat = Vue.extend({
	template: "<div class='accident_box'><div id='accident'>意外事故</div><ul class='accident_content'><li id='back'>烧伤<img src='img/jinru@2x.png'></li><li>交通事故<img src='img/jinru@2x.png'></li><li>中毒<img src='img/jinru@2x.png'></li><li>溺水<img src='img/jinru@2x.png'></li><li id='zuihou'>电击<img src='img/jinru@2x.png'></li></ul><div id='accident_second'>突发情况</div><ul class='accident_second_content'><li>休克<img src='img/jinru@2x.png'></li><li>抽搐<img src='img/jinru@2x.png'></li><li>晕车<img src='img/jinru@2x.png'></li><li id='zuihou'>癫痫<img src='img/jinru@2x.png'></li></ul><div id='foreign'>异物入侵</div><ul class='foreign_tencont'><li>眼睛异物<img src='img/jinru@2x.png'></li><li>肢体异物<img src='img/jinru@2x.png'></li><li>主干异物<img src='img/jinru@2x.png'></li><li>胃部异物<img src='img/jinru@2x.png'></li><li id='zuihou'>腿部异物<img src='img/jinru@2x.png'></li></ul><div>"
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
var Test_Back = document.querySelector("#Test_back")
Test_Back.addEventListener("touchend", function(){  
     location.href="clearer_bible.html"; 
});
var A_click = document.getElementsByTagName('a');
var A_click1 = A_click[0];
var A_click2 = A_click[1];
A_click1.addEventListener("touchend", function(){  
     A_click1.style.color = "red";
     A_click2.style.color = "#000";
});
A_click2.addEventListener("touchend", function(){  
     A_click2.style.color = "red";
     A_click1.style.color = "#000";
});

// 意外事故跳转
var li_tall = document.getElementsByTagName("li");
   for (var i = 0; i < li_tall.length; i++) {
   	li_tall[i].z = i;
    li_tall[i].addEventListener("touchend", function(){
    	var k = this.z; 
    	console.log(k)
    location.href="emergencySaveYoudog/burns"+k+".html";
  });
}

// li_tall+i.addEventListener("touchend", function(){  
// 	alert("dsfs")
//     location.href="emergencySaveYoudog/burns.html";
//   });



