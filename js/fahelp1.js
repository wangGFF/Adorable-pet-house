var For_help_type = {
	news:[
	{
		title: '医疗',
		type: 'qiuzhuleixing_icon1@2x.png',
		contenttype:'疾病  外伤  感伤  康复  驱虫  疫苗'
	},
	{
		title: '养护',
		type: 'qiuzhuleixing_icon2@2x.png',
		contenttype:'科学喂养  毛发修剪'
	},
	{
		title: '训练',
		type: 'qiuzhuleixing_icon3@2x.png',
		contenttype:'习惯培养  技能训练  沟通技巧'
	},
	{
		title: '其他',
		type: 'qiuzhuleixing_icon4@2x.png',
		contenttype:'其它问题询问'
	}
   ]
}
new Vue({
el: '#For_help_type',
data: For_help_type
})
var For_Help_Type_Back = document.querySelector("#For_Help_Type_back");
For_Help_Type_Back.addEventListener("touchend", function(){ 
	location.href="fahelp.html";
});