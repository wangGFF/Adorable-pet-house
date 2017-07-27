$(function(){
	var scHeight=window.screen.availHeight;
	var topHeight=$(".top_sickness").height();
	$(".petListBox").css("height",scHeight-topHeight+"px");
})
window.onload=function(){
	var vue=new Vue({
		el:"#app",
		data:{data:""},
		created:function(){
			var that=this;
			var xhr1=new XMLHttpRequest();
			xhr1.onreadystatechange=function(){
				if (xhr1.readyState==4) {
					that.data=JSON.parse(xhr1.responseText).data;
					console.log(that.data)
				}
			}
			xhr1.open("post","json/setPetList.json",true);
			xhr1.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr1.send("acode=1&uid=22387&type=1");
		}
	})
}