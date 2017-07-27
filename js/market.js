$(function(){
	$(".keys .left li").click(function(){
		$(".keys .left li").css({
			backgroundColor:"",
			borderBottom:""
		});
        console.log($(this).index());
		$(this).css({
			backgroundColor:"white",
			borderBottom:"0.3rem solid #dc4442"
		});
        if($(this).children("p").html()=="主粮"){
            $(".right1").show();
            $(".right2").hide();
        }
        if($(this).children("p").html()!="主粮"){
        	$(".right1").hide();
        	$(".right2").show();
        	$(".right2").css({
        		marginTop:$(".left li").innerHeight()*$(this).index()+2+"px",
        	});
            if($(this).children("p").html()==="医疗"){
                $(".right2").css({
                marginTop:$(".left li").innerHeight()*$(this).index()+6+"px",
            });
                $(".right2").click(function(){
                    window.location.href="market_yiliao.html"
                })
            }
            if($(this).children("p").html()==="玩具"){
                $(".right2").css({
                marginTop:$(".left li").innerHeight()*$(this).index()+5+"px",
            });
                $(".right2").click(function(){
                    window.location.href="market_wanju.html"
                })
            }
            if($(this).children("p").html()==="用品"){
                $(".right2").click(function(){
                    window.location.href="market_yongju.html"
                })
            }
            if($(this).children("p").html()==="罐头"){
                $(".right2").click(function(){
                    window.location.href="market_guantou.html"
                })
            }
            if($(this).children("p").html()==="零食"){
                $(".right2").click(function(){
                    window.location.href="market_lingshi.html"
                })
            }
        }
	});
    $(".back").click(function(){
        window.history.back(-1);
    })
})