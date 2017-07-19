    var vue = new Vue({
        el:'.bottom_div',
        data:{data:""},
        created:function(){
                 var that = this;
                 var xhr = new XMLHttpRequest();
                 xhr.onreadystatechange = function(){
                    if (xhr.readyState==4) {
                        console.log(xhr.responseText);
                        that.data = JSON.parse(xhr.responseText).data;
                        console.log(that.data)
                    }

                 }
                 xhr.open('post','json/person.json',true);
                 xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                 xhr.send("acode=1&uid=25085&type=1");
            }
    })
$(function(){
	var click = false;
	   $(".header>.event>img").click(function(){
	        if (click === false) {
				$(".right_top_sjx_div").css("display","block");
				$(".right_top_div").css("display","block");
				click = true; 
	        }else{
	        	$(".right_top_sjx_div").css("display","none");
				$(".right_top_div").css("display","none");
				click = false; 
	        }
		});
	   //创建分享蒙版
		$(".right_top_div>ul>li:nth-child(1)").click(function(){
			$(".right_top_sjx_div").css("display","none");
			$(".right_top_div").css("display","none");
			click = false;
			$(".mengban1").css("display","block");
			$(".mengban2").css("display","block").click(function(){
				$(".mengban1").css("display","none");
				$(".mengban2").css("display","none");
			});

		})
	   //创建拉黑蒙版
	   $(".right_top_div>ul>li:nth-child(2)").click(function(){
			$(".right_top_sjx_div").css("display","none");
			$(".right_top_div").css("display","none");
			click = false;
			$(".mengban3").css("display","block").click(function(){
				$(".mengban4").css("display","none");
				$(".mengban3").css("display","none");
			});
			$(".mengban4").css("display","block");

	   })
        //创建举报模板
        $(".right_top_div>ul>li:nth-child(3)").click(function(){
			$(".right_top_sjx_div").css("display","none");
			$(".right_top_div").css("display","none");
			click = false;
			$(".mengban3").css("display","block").click(function(){
				$(".mengban5").css("display","none");
				$(".mengban3").css("display","none");
			});
			$(".mengban5").css("display","block");

	   })

		
	
})
