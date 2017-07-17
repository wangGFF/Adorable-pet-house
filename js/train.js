$(function(){
	var windowWidth=document.body.clientWidth;
	if (windowWidth>800) {
		$(".topDoctorWord").css("left","10%");
		$(".topDoctorTap").css("left","10%");
	}
	$(window).resize(function(){
		var windowWidthA=document.body.clientWidth;
		if (windowWidthA>800) {
			$(".topDoctorWord").css("left","10%");
			$(".topDoctorTap").css("left","10%");
		}else{
			$(".topDoctorWord").css("left","27.4666666%");
			$(".topDoctorTap").css("left","27.4666666%");
		}
	});
	$(".placeholder_word").click(function(){
		$("#topInputSearch").focus();
	});
	$("#topInputSearch").keyup(function(){
		if ($("#topInputSearch").val().length>0) {
			$(".placeholder_word").css("display","none");
		}else{
			$(".placeholder_word").css("display","block");
		}
	})
	$("#directory>ul>li").click(function(){
		console.log('1');
		$("#directory>ul>li").css({'border':'1px solid black'});
		$(this).css({'border':'1px solid red','color':'red'});
	})
	$("#directory>ul>li>a").click(function(){
		$("#directory>ul>li>a").css('color','black');
		$(this).css('color','red')
	})
	
})
    	var allData = {}; 
(function() {
    var that = this;
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == 4) {
            that.data = JSON.parse(xhr1.responseText).data;
            console.log(that.data);
            allData = that.data;
            console.log(allData.beauty.length)
	            var beauty = Vue.extend({
	                template: "#beauty",
	                data:function(){
	                	return{
	                		word:allData.beauty,
	                		name:allData.beauty
	                	}
	                }
	            });
	            var training = Vue.extend({
	                template: "#training",
	                data:function(){
	                	return{
	                		word:allData.training,
	                		name:allData.training
	                	}
	                }
	            });
	            var video = Vue.extend({
	                template: "#video",
	                data:function(){
	                	return{
	                		word:allData.video,
	                		name:allData.video
	                	}
	                }
	            });
	            var defaults = Vue.extend({
	                template: "#defaults",
	                data:function(){
	                	return{
	                		word:allData.defaults,
	                		name:allData.defaults
	                	}
	                }
	            });
	            var router = new VueRouter();
	            router.map({
                '/beauty': {
                    component: beauty
                },
                '/training': {
                    component: training
                },
                '/video': {
                    component: video
                },
                '/defaults': {
                    component: defaults
                }
            });
	            router.redirect({
                '/': '/defaults'
            });
	            var App = Vue.extend({});
            router.start(App, "#directory");
		}
    }
    
    xhr1.open("post", "json/train.json", true);
    xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr1.send("acode=1&uid=22387&type=1");
} ())

