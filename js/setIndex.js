
$(function(){
	var height=window.screen.availHeight;
	var topHeight=$(".top_sickness").height();
	$(".setInBox").css("height",height-topHeight+"px");
	$(".cleanCache>ul>li").click(function(){
		$(".cleanCacheBox").css("display","none")
	})
	$(".cleanCacheAll").click(function(){
		$(".cleanCacheBox").css("display","block")
	})

	
})
