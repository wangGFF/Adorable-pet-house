var date = {
news : [
	{
		title: '狗狗疾病',
		type: 'jibingbaike_icon1@2x.png'
	},
	{
		title: '猫猫疾病',
		type: 'jibingbaike_icon2@2x.png'
	},
	{
		title: '宠物兔疾病',
		type: 'jibingbaike_icon3@2x.png'
	},
	{
		title: '宠物鼠',
		type: 'jibingbaike_icon4@2x.png'
	},
	{
		title: '宠物鸟疾病',
		type: 'jibingbaike_icon5@2x.png'
	},
	{
		title: '宠物龟疾病',
		type: 'jibingbaike_icon6@2x.png'
	},
	{
		title: '宠物鱼疾病',
		type: 'jibingbaike_icon7@2x.png'
	},
	{
		title: '其他疾病',
		type: 'jibingbaike_icon8@2x.png'
	}
	
 ]
}
new Vue({
el: '#reading',
data: date
})
var Readingg_back = document.querySelector("#readingg_back");
Readingg_back.addEventListener("touchend", function(){  
     location.href="add_pet.html";
});
