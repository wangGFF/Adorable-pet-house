var data = {
news : [
	{
		title: '暴躁、哀嚎、撕咬、抓挠',
		type: 'jinru@2x.png'
	},
	{
		title: '不把主人放在眼里',
		type: 'jinru@2x.png'
	},
	{
		title: '不喜欢吃狗粮',
		type: 'jinru@2x.png'
	},
	{
		title: '对主人有攻击行为',
		type: 'jinru@2x.png'
	},
	{
		title: '会攻击陌生人',
		type: 'jinru@2x.png'
	},
	{
		title: '见人就跳个不停',
		type: 'jinru@2x.png'
	},
	{
		title: '狂吠不止',
		type: 'jinru@2x.png'
	},
	{
		title: '怕打雷',
		type: 'jinru@2x.png'
	},
	{
		title: '爬跨行为',
		type: 'jinru@2x.png'
	},
	{
		title: '喜欢咬东西',
		type: 'jinru@2x.png'
	},
	{
		title: '有护食行为',
		type: 'jinru@2x.png'
		
	},
	{
		title: '无视主人',
		type: 'jinru@2x.png'
		
	},
	{
		title: '喜欢刨土',
		type: 'jinru@2x.png'
		
	},
	{
		title: '不听召唤',
		type: 'jinru@2x.png'
		
	}
 ]
}
new Vue({
el: '#app',
data: data
})
var Readingg_back = document.querySelector("#readingg_back");
Readingg_back.addEventListener("touchend", function(){  
     location.href="clearer_bible.html";
});
var li_reading = document.getElementsByTagName("li");
// reading跳转
 for (var i = 0; i < li_reading.length; i++) {
   	li_reading[i].z = i;
    li_reading[i].addEventListener("touchend", function(){
    	var k = this.z; 
    	console.log(k)
    location.href="dog_mind_readingg/reading_symptoms"+k+".html";
  });
}

