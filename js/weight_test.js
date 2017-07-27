var data = {
news : [
	{
		title: '狗狗品种',
		type: 'jinru@2x.png',
		id:'first'
	},
	{
		title: '狗狗性别',
		type: 'jinru@2x.png',
		id:'second'
	},
	{
		title: '狗狗年龄',
		type: 'jinru@2x.png',
		id:'three'
	}
 ]
 
}
new Vue({
el: '#test',
data: data
})

// $("#first")
// $()
// $()
// $()
var backg = document.querySelector("#back")
backg.addEventListener("touchend", function(){  
     location.href="clearer_bible.html";  
});
var weight_test = document.querySelector("#first")
weight_test.addEventListener("touchend", function(){  
     console.log("OK")  
});
var You_Save = document.querySelector("#second")
You_Save.addEventListener("touchend", function(){  
     $(".Pet_sex")[0].style.display ="block" ;
     $(".clerrer_bible")[0].style.display ="none" ;
}); 
var dog_heart = document.querySelector("#three")
dog_heart.addEventListener("touchend", function(){  
     console.log("OK")  
}); 


 var arr = ["张三1","李四2","王五3","阿三4","曾","龚","张"]; 
document.write(arr+"<br/>"); 
arr.sort(function(a,b){ 
return a.localeCompare(b); 
}); 
console.log(arr);

