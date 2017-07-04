$(function(){
	$(".keys .left li").click(function(){
		$(".keys .left li").css({
			backgroundColor:"",
			borderBottom:""
		});
		$(this).css({
			backgroundColor:"white",
			borderBottom:"0.3rem solid #dc4442"
		});
        if($(this).children("p").html()=="主粮"){
            $(".right1").show();
            $(".right2").hide();
        }
        if($(this).children("p").html()!="主粮"){
        console.log($(".left li").innerHeight());
        	$(".right1").hide();
        	$(".right2").show();
        	$(".right2").css({
        		marginTop:$(".left li").innerHeight()+"px",
        	});
        }
	})
})