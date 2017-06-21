$(function(){
	$(".product span").click(function(){
		$(".product span").css({
			borderBottom:"0"
		});
		$(this).css({
			borderBottom:"4px solid black"
		})
	});
	window.onresize=function(){
		var windowWidth=document.documentElement.clientWidth;
		console.log($("ul li").width());
		console.log(windowWidth);
		document.documentElement.style.fontSize=15*$("ul li").width()/windowWidth+"px";
	}
})