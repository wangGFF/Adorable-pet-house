var data = {
news : [
	{
		title: '体重测试',
		type: 'chongwubaodian-liebiao-1@2x.png',
		id:'first'
	},
	{
		title: '紧急自救',
		type: 'chongwubaodian-liebiao-2@2x.png',
		id:'second'
	},
	{
		title: '狗狗心里',
		type: 'chongwubaodian-liebiao-3@2x.png',
		id:'three'
	},
	{
		title: '宠物训练',
		type: 'chongwubaodian-liebiao-4@2x.png',
		id:'four'
	}
 ]
}
new Vue({
el: '#app',
data: data
})
// $("#first")
// $()
// $()
// $()

var weight_test = document.querySelector("#first")
weight_test.addEventListener("touchend", function(){  
     location.href="weight_test.html"; 
});
var You_Save = document.querySelector("#second")
You_Save.addEventListener("touchend", function(){  
     location.href="emergencySaveYou.html";
}); 
var dog_heart = document.querySelector("#three")
dog_heart.addEventListener("touchend", function(){  
     location.href="dog_mind_reading.html";  
}); 
var pet_training = document.querySelector("#four")
pet_training.addEventListener("touchend", function(){  
     location.href="Pet_training.html";  
}); 
