$(function(){
	$(".com_content").hide();
	$(".product p").click(function(){
		$(".product p").css({
			borderBottom:"0"
		});
		$(this).css({
			borderBottom:"4px solid black"
		});
		console.log($(this).html());
		if($(this).html()==="商品详情"){
           $(".Pro_details").show();
           $(".com_content").hide();
           $(".share").show();    
		}else{
			console.log(1);
			$(".Pro_details").hide();
           $(".com_content").show();
           $(".share").hide();
		}
	});
	window.onresize=function(){
		var windowWidth=document.documentElement.clientWidth;
		console.log($("ul li").width());
		console.log(windowWidth);
		document.documentElement.style.fontSize=15*$("ul li").width()/windowWidth+"px";
	}
})