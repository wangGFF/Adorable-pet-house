$(function(){
	window.onresize=function(){
		var documentHeight=$(document).height();
		var documentWidth=$(document).width();
		$(".maskLayer").hide();
		$(".share").hide();
		$(".sousuo").click(function(){
			$(".maskLayer").show().css({
				backgroundColor:"black",
	            width:documentWidth, 
				height:documentHeight,
				left: "0", 
				top: "0",
				filter:"alpha(opacity=50)", 
				opacity: "0.5",
				zIndex: "1", 
				position: "absolute" 
			});
			$(".share").show();
	   })
	};
	var documentHeight=$(document).height();
	var documentWidth=$(document).width();
	$(".sousuo").click(function(){
		    $(".maskLayer").show();
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
			});
			$(".share").show();
	   });
	$(".cancel").click(function(){
		$(".share").hide();
		$(".maskLayer").hide();
	})
	   $(".back").click(function(){
        window.history.back(-1);
    })	
})