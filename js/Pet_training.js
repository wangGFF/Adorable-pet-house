var Dog = Vue.extend({
	template: "<ul id='dog_xunlian'><li>如何训练狗狗学会用餐礼仪<img src='img/jinru@2x.png'></li><li>如何训练狗狗不扑陌生人<img src='img/jinru@2x.png'></li><li>如何训练狗狗如厕<img src='img/jinru@2x.png'></li><li>如何训练狗狗不挑食<img src='img/jinru@2x.png'></li><li>如何训练狗狗回应名字<img src='img/jinru@2x.png'></li><li>如何训练狗狗和你握手<img src='img/jinru@2x.png'></li><li>如何训练狗狗不撕家具<img src='img/jinru@2x.png'></li><li>如何训练狗狗在窝里睡觉<img src='img/jinru@2x.png'></li><li>如何训练狗狗站立<img src='img/jinru@2x.png'></li><li>如何训练狗狗爱上洗澡<img src='img/jinru@2x.png'></li><li>如何训练狗狗学不攻击人<img src='img/jinru@2x.png'></li><li>如何训练狗狗自愿剪指甲<img src='img/jinru@2x.png'></li><li>如何训练狗狗学不乱咬人<img src='img/jinru@2x.png'></li></ul>"
})
var Cat = Vue.extend({
	template: "<ul id='dog_xunlian'><li>如何训练猫猫学会用餐礼仪<img src='img/jinru@2x.png'></li><li>如何训练猫猫不扑陌生人<img src='img/jinru@2x.png'></li><li>如何训练猫猫如厕<img src='img/jinru@2x.png'></li><li>如何训练猫猫不挑食<img src='img/jinru@2x.png'></li><li>如何训练猫猫回应名字<img src='img/jinru@2x.png'></li><li>如何训练猫猫和你握手<img src='img/jinru@2x.png'></li><li>如何训练猫猫不撕家具<img src='img/jinru@2x.png'></li><li>如何训练猫猫在窝里睡觉<img src='img/jinru@2x.png'></li><li>如何训练猫猫站立<img src='img/jinru@2x.png'></li><li>如何训练猫猫爱上洗澡<img src='img/jinru@2x.png'></li><li>如何训练猫猫学不攻击人<img src='img/jinru@2x.png'></li><li>如何训练猫猫自愿剪指甲<img src='img/jinru@2x.png'></li><li>如何训练猫猫学不乱咬人<img src='img/jinru@2x.png'></li></ul>"
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
	dogcat.view = hash || 'dog';
}

// 对hash改变注册事件
window.addEventListener('hashchange', route) //hashchange
window.addEventListener('load', route)
var Test_Back = document.querySelector("#Test_back")
Test_Back.addEventListener("touchend", function(){  
     location.href="clearer_bible.html"; 
});
// 意外事故跳转
var li_tall = document.getElementsByTagName("li");
   for (var i = 0; i < li_tall.length; i++) {
   	li_tall[i].z = i;
    li_tall[i].addEventListener("touchend", function(){
    	var k = this.z; 
    	console.log(k)
    location.href="Pet_trainingdogcat/trainingdog"+k+".html";
  });
}
var A_click = document.getElementsByTagName('a');
var A_click1 = A_click[0];
var A_click2 = A_click[1];
A_click1.addEventListener("touchend", function(){  
     A_click1.style.color = "red";
     A_click2.style.color = "#000";
     var li_tall = document.getElementsByTagName("li");
   for (var i = 0; i < li_tall.length; i++) {
   	li_tall[i].z = i;
    li_tall[i].addEventListener("touchend", function(){
    	var k = this.z; 
    	console.log(k)
    location.href="Pet_trainingdogcat/trainingdog"+k+".html";
  });
}

});

A_click2.addEventListener("touchend", function(){  
     A_click2.style.color = "red";
     A_click1.style.color = "#000";
     var li_tall = document.getElementsByTagName("li");
     console.log(li_tall)
     for (var i = 0; i < li_tall.length; i++) {
   	li_tall[i].z = i;
    li_tall[i].addEventListener("touchend", function(){
    	var k = this.z; 
    	console.log(k)
    location.href="Pet_trainingdogcat/trainingdog"+k+".html";
  });
}

});



// li_tall+i.addEventListener("touchend", function(){  
// 	alert("dsfs")
//     location.href="emergencySaveYoudog/burns.html";
//   });



