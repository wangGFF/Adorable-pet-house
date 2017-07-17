$(function(){
	      //判断不同手机显示屏宽度
          var x = window.screen.width ;
          var y = window.screen.height;
          console.log(y)
          var X= 2*window.screen.width ;
          //根据不同手机显示屏宽度设置第2张第3张引导页的位置
           $('li:nth-child(2)').css({'left':x+'px'});
           $('li:nth-child(3)').css({'left':X+'px'});

           document.addEventListener("touchstart", touchstartHandler, false);
		   document.addEventListener("touchmove", touchmoveHandler, false);
		   document.addEventListener("touchend", touchendHandler, false);
		   //定义开始触摸点位置
		   var startX;
		   //定义误差大小
		   var distanceX;
           function touchstartHandler(event){
			//开始值 
			startX = event.touches[0].clientX;
			console.log(startX)
		    }

            // 触摸移动
		    function touchmoveHandler(event){
			//distanceX是手指的位置减去误差
			distanceX = event.touches[0].clientX - startX;
			console.log(event.touches[0].clientX)
            console.log(distanceX)
		    }
		    //触摸结束
            function touchendHandler(event){
        	//判断向左还是向右（distansce<0向左，反之向右）
        	if(distanceX < 0&&($('li:nth-child(1)').css('left')==0+'px')){
        			$('li:nth-child(1)').animate({'left':-x+'px'},600);
        		    $('li:nth-child(2)').animate({'left':0+'px'},500);
                    $('li:nth-child(3)').animate({'left':x+'px'},500);
             }else if(distanceX < 0&&($('li:nth-child(2)').css('left')==0+'px')){
        	        $('li:nth-child(1)').animate({'left':-X+'px'},500);
        		    $('li:nth-child(2)').animate({'left':-x+'px'},500);
                	$('li:nth-child(3)').animate({'left':0+'px'},500);
        	}
        	if(distanceX > 0&&($('li:nth-child(3)').css('left')==0+'px')){
        			$('li:nth-child(1)').animate({'left':-x+'px'},500);
        		    $('li:nth-child(2)').animate({'left':0+'px'},500);
                    $('li:nth-child(3)').animate({'left':x+'px'},500);
        	}else if(distanceX > 0&&($('li:nth-child(2)').css('left')==0+'px')){
        			$('li:nth-child(1)').animate({'left':0+'px'},500);
                    $('li:nth-child(2)').animate({'left':x+'px'},500);
                    $('li:nth-child(3)').animate({'left':X+'px'},500);
        	}
            }
      	    //登录注册
      	    $('.click').css({'width':0.3*x+'px','height':0.045*y+'px','bottom':0.075*y+'px','left':0.35*x+'px','fontSize':0.048*x+'px'});
      	    $('.click>div').css({'width':0.1333*x+'px','height':0.045*y+'px','textAlign':'center','lineHeight':0.045*y+'px'})
            $('.click>div:nth-child(1)').click(function(){
               window.location.href='login.html';
            })
            $('.click>div:nth-child(2)').click(function(){
               window.location.href='register.html';
            })
      
})