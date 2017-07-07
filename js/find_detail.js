$(function(){
	window.onresize=function(){
		var documentHeight=$(document).height();
        console.log(documentHeight);
		var documentWidth=$(document).width();
		console.log(documentWidth);
		$(".sousuo").click(function(){
			$(".maskLayer").css({
				backgroundColor:"black",
	            width:documentWidth, 
				height:documentHeight,
				left: "0", 
				top: "0",
				filter:"alpha(opacity=50)", 
				opacity: "0.5",
				zIndex: "1", 
				position: "absolute" 
			})
	   })
	}	
})