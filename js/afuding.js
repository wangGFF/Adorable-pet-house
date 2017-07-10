var vue=new Vue({
	el:"#app",
	data:{data:""},
	created:function(){
		var that=this;
		var xhr=new XMLHttpRequest();
		xhr.onreadystatechange=function(){
			if (xhr.readyState==4) {
				that.data=JSON.parse(xhr.responseText).data;
				console.log(that.data)
			}
		}
		xhr.open("post","json/afuding.json",true);
		xhr.setRequestHeader("Content-Type","application/x-www-form-unlencoded");
		xhr.send("");
	}
})