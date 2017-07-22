var date_new = [];
    function fun (data_all){
    date_new = data_all.data.list;
    console.log(date_new);
}
window.onload=function (){
	var My_Dynamic_content = document.getElementById("My_Dynamic_Content_bod");
	console.log(My_Dynamic_content)
	for (var i = 0; i < date_new.length; i++) {
		var div = document.createElement("div");
		div.className = "My_Dynamic_content_box";
		var div1 = document.createElement("div");
		div1.className = "My_Dynamic_content_box1";
		var span1 = document.createElement("span");
		span1.innerHTML = date_new[i].Time_year;
		var span2 = document.createElement("span");
		span2.innerHTML = date_new[i].Time_mon;
		var img = document.createElement("img");
		img.src = date_new[i].head_image;
	    var div2 = document.createElement("div");
	    div2.className = "My_Dynamic_content_box2"
	    var div3 = document.createElement("div");
	    div3.innerHTML = date_new[i].head_theme;
	    var div4 = document.createElement("div");
	    div4.innerHTML = date_new[i].head_content;
	    div1.appendChild(span1);
        div1.appendChild(span2);
        div2.appendChild(img);
        div2.appendChild(div3);
	    div2.appendChild(div4);
	    div.appendChild(div1);
	    
	    div.appendChild(div2);
	    
	    
	    My_Dynamic_content.appendChild(div);
	};
}