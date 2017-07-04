var expertData=[];
function expert(data){
	// console.log(data);
    expertData=data.data.list;
};
window.onload=function(){
	createList();
	function createList(){
		var doctorListBox=document.getElementById('doctorListBox');
		for (var i = 0; i < expertData.length; i++) {
			var doctorListDiv=document.createElement("div");
			doctorListDiv.className="doctorListDiv";
			var topDoctorList =document.createElement("div");
			topDoctorList.className="topDoctorList";
			// 加医生图片
			var topDoctorImg=document.createElement("img");
			topDoctorImg.className="topDoctorImg";
			topDoctorImg.src=expertData[i].doctorImg;
			topDoctorList.appendChild(topDoctorImg);
			// 加医生名
            var topDoctorWord=document.createElement("span");
            topDoctorWord.className="topDoctorWord";
            topDoctorWord.innerHTML=expertData[i].doctorName;
            topDoctorList.appendChild(topDoctorWord);
            // 加医生类型
            var topDoctorTap=document.createElement("p");
            topDoctorTap.className="topDoctorTap";
            topDoctorTap.innerHTML=expertData[i].doctorTap;
            topDoctorList.appendChild(topDoctorTap);
	        // 问Ta
            var questionTa=document.createElement("a");
            questionTa.className="questionTa";
            questionTa.href=expertData[i].doctorUrl;
            questionTa.innerHTML="问Ta";
            topDoctorList.appendChild(questionTa);
			doctorListDiv.appendChild(topDoctorList);
            // 个人专长开始
            var centerDoctorList=document.createElement("div");
            centerDoctorList.className="centerDoctorList";
            centerDoctorList.innerHTML=expertData[i].doctorSpecialty;
            doctorListDiv.appendChild(centerDoctorList);
            doctorListDiv.appendChild(centerDoctorList);
            // 医生地址
            var bottomDoctorList=document.createElement("div");
            bottomDoctorList.className="bottomDoctorList";
            var bottomDoctorImg=document.createElement("img");
            bottomDoctorImg.className="bottomDoctorImg";
            bottomDoctorImg.src=expertData[i].doctorAddressImg;
            var bottomDoctorAddress=document.createElement("span");
            bottomDoctorAddress.className="bottomDoctorAddress";

            bottomDoctorAddress.innerHTML=expertData[i].doctorAddress;
            bottomDoctorList.appendChild(bottomDoctorImg);
            bottomDoctorList.appendChild(bottomDoctorAddress);
            doctorListDiv.appendChild(bottomDoctorList);


            doctorListBox.appendChild(doctorListDiv);
		}
	}
}
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
	
})