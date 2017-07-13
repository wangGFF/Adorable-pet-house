$(function(){
	var scHeight=window.screen.availHeight;
	var topHeight=$(".top_sickness").height();
	$("#petInforAdd").css("height",scHeight-topHeight+"px");
	var liWidth=$("#petInforAdd>form>ul li").width();
	var sexWidth=$(".sexWord").width();
	var petSexLeft=liWidth*0.05+sexWidth;
	$(".petSex").css("left",petSexLeft+"px");
	$(".circleBox").css("left",petSexLeft+"px");
	$("#petInforDl").click(function(){
		$(".bigDeleteBox").css("display","block");
	})
	$("#centerDelete").click(function(){
		$("#petInforAdd>form>ul>li>input").val("");
		$(".bigDeleteBox").css("display","none");
		$(".petHead").attr("src", "");
	});
	$("#cancelDelete").click(function(){
		$(".bigDeleteBox").css("display","none");
	})

})