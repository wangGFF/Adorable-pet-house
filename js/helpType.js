var helpData=[];
function helpType(data){
	helpData=data.data.list;
}
window.onload=function(){
	createList();
	function createList(){
		var helpDataList=document.getElementById('helpDataList');
		for (var i = 0; i < helpData.length; i++) {
			var helpA=document.createElement("a");
			helpA.className="helpA";
			helpA.href=helpData[i].helpUrl;

			// 加入图片
			var helpImg=document.createElement("img");
			helpImg.className="helpImg";
			helpImg.src=helpData[i].helpImg;
			helpA.appendChild(helpImg);

			// 加入类型
			var helpType=document.createElement("span");
			helpType.className="helpType";
			helpType.innerHTML=helpData[i].type;
			helpA.appendChild(helpType);

			// 加入换行
			var helpBr=document.createElement("br");
			helpA.appendChild(helpBr);

			// 加入描述
			var helpIntroduce=document.createElement("span");
			helpIntroduce.className="helpIntroduce";
			helpIntroduce.innerHTML=helpData[i].Introduction;
			helpA.appendChild(helpIntroduce);
			helpDataList.appendChild(helpA);


		}
	}
}