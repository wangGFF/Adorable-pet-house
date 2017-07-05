$(function(){
	$(".sousuo").click(function(){
		$(".back").siblings().hide();
		$(".text").show();
		$(".cancel").show().css({
			display:"inline-block",
			width:"10%",
			height:"28px",
			lineHeight:"28px",
			textAlign:"center"
		});

	})
})