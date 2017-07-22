var help = {
	news:[
	{
		title: '选择求助类型',
		type: 'jinru@2x.png',
		id:'select_type'
	},
	{
		title: '选择宠物',
		type: 'jinru@2x.png',
		id:'sele_pet'
	}
   ]
}
new Vue({
el: '#help',
data: help
})
var Select_type = document.querySelector("#select_type");
Select_type.addEventListener("touchend", function(){  
    location.href="fahelp1.html";
});
var Help_back = document.querySelector("#help_back");
Help_back.addEventListener("touchend", function(){ 
	location.href="dog_mind_readingg/reading_symptoms0.html";
    
});

var Sele_pet = document.querySelector("#sele_pet");
Sele_pet.addEventListener("touchend", function(){ 
	location.href="fahelp2.html";
    
});
// var Add_pet_click = document.querySelector("#add_pet_click");
// Add_pet_click.addEventListener("touchend", function(){  
//     location.href="add_pet.html";
// });
