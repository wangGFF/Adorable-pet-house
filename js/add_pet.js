
$(function(){
	var height=window.screen.availHeight;
	var topHeight=$(".top_sickness").height();
	$(".formAll").css("height",height-topHeight+"px");
	$(".petSex>img").click(function(){
		var sp=$(this).index();
		if (sp==0) {
			var petW=$(".petSexW1").html();
			$(".inputSex").val(petW);
		}
		if (sp==2) {
			var petW=$(".petSexW2").html();
		}
		$(".inputSex").val(petW);
		$(".petSex").css("display","none")
	})
	$(".petSex>span").click(function(){
		var petW=$(this).html();
		$(".inputSex").val(petW);
		$(".petSex").css("display","none")
	})
	$(".inputSex").focus(function(){
		$(".petSex").css("display","block");
		$(".inputSex").val("");
	})
	$(".inputSex").keyup(function(){
		if ($(".inputSex").val()!="GG"||$(".inputSex").val()!="MM") {
			$(".inputSex").val("");
		}
		if ($(".inputSex").val()=="GG"||$(".inputSex").val()=="MM") {
			$(".petSex").css("display","none")
		}
	});
})
$("#input1").shijian({
	y:-10//当前年份+10
})
$("#input2").shijian({
	showNowTime:false,//是否显示当前时间(为true时，input值如果为空则显示当前时间)
	Year:false,//是否显示年//
    Month:false,//是否显示月//
    Day:false,//是否显示日//
    h:"00",//自定义起始小时
    m:"01",//自定义起始分钟
	alwaysShow:true,//是否直接显示，默认为false
	timeElm:$(".time-box"),//需要在哪个元素中展示元素需要定位  可使用字符串的形式（"$(sjObj).prev()" sjObj表示当前时间对象
})
// sjObj.defaults = {
// 	type: "time",
// 	Format: "yyyy-mm-dd", //显示时间格式//yyyy表示年份 ，mm月份 ，dd天数  支持三种格式 dd-mm-yyyy ，mm-dd-yyyy yyyy-mm-dd
// 	Order: 'yymmdd',
// 	width: 60, //默认宽度
// 	height: 32,//默认数值高度
// 	Year: true, //是否显示年//
// 	Month: true, //是否显示月//
// 	Day: true, //是否显示日//
// 	Hour: false, //是否显示小时
// 	Minute: false, //是否显示分钟
// 	Seconds: false, //是否显示秒
// 	yyyy: "0000", //当前显示年
// 	mm: "00", //当前显示月
// 	dd: "00", //当前显示日
// 	h: "00", //当前显示小时
// 	m: "00", //当前显示分
// 	s: "00", //当前显示秒
// 	okText: "确认", //按钮确认键文字
// 	cancelText: "取消", //按钮取消键文字
// 	showNowTime: true, //是否默认显示当前时间
// 	alwaysShow: false, //是否默认直接显示插件
// 	timeElm: null, //放时间插件的box
// 	onfun: function() { //取消改变时间时候执行事件
	
// 	},
// 	okfun: function() { //确认时间时候执行事件

// 	},
// }
//狗狗的品种
var EnglishLetter=[];
var sicknessAll=[];
function sickness(data){
    EnglishLetter=data.data.EnglishLetter;
    sicknessAll=data.data.sickness;
}
$(function(){
    $("#search_dog_BigBox").click(function(){
    	$("#search_dog_Input").focus();
    });
    $("#search_dog_Input").keyup(function(){
        if ($("#search_dog_Input").val().length>0) {
    	    $("#search_dog_BigBox").css("display","none");
        }
        if ($("#search_dog_Input").val()=="") {
    	    $("#search_dog_BigBox").css("display","block");
        }

    })

});

var Select_pet_box = document.querySelector("#select_pet_box");
Select_pet_box.addEventListener("touchend", function(){  
    location.href="add_pet1.html";
});
var Top_Sickness_back = document.querySelector("#top_sickness_back");
Top_Sickness_back.addEventListener("touchend", function(){  
    location.href="fahelp2.html";
});
