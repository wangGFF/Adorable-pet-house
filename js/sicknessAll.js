var sicknessData=[];
function sicknessAll(data){
	sicknessData=data.data.list;
}
window.onload=function(){
	createList();
	function createList(){
		var sicknessDataList=document.getElementById('sicknessDataList');
		for (var i = 0; i < sicknessData.length; i++) {
			var sicknessBox=document.createElement("div");
			sicknessBox.className="sicknessBox";
			var sicknessA=document.createElement("a");
			sicknessA.className="sicknessA";
            sicknessA.href=sicknessData[i].petUrl;

			// 添加图片
			var sicknessImg=document.createElement("img");
			sicknessImg.className="sicknessImg";
			sicknessImg.src=sicknessData[i].petImg;
            sicknessA.appendChild(sicknessImg);
			//添加文字
			var sicknessWord=document.createElement("span");
			sicknessWord.className="sicknessWord";
			sicknessWord.innerHTML=sicknessData[i].petSickness;
            sicknessA.appendChild(sicknessWord);
            sicknessDataList.appendChild(sicknessA);




		}
	}
}