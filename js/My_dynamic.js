
if (document.getElementById("My_Dynamic_content").innerHTML =="") {
	var img = document.createElement("img");
	img.src ="img/meiyouxiaoxi@2x.png";
	document.getElementById("My_Dynamic_content").appendChild(img);
    var span = document.createElement("span");
    span.className = "ggg";
    span.innerHTML = "你还没有发过任何动态哟~" ;
    document.getElementById("My_Dynamic_content").appendChild(span)
}else{
	
}