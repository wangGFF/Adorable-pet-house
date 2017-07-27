var EnglishLetter=[];
var sicknessAll=[];
function sickness(data){
    EnglishLetter=data.data.EnglishLetter;
    sicknessAll=data.data.sickness;
}
$(function(){
    $("#searchBigBox").click(function(){
    	$("#searchInput").focus();
    });
    $("#searchInput").keyup(function(){
        if ($("#searchInput").val().length>0) {
    	    $("#searchBigBox").css("display","none");
        }
        if ($("#searchInput").val()=="") {
    	    $("#searchBigBox").css("display","block");
        }

    })

});
window.onload=function(){
	createBox();
	function createBox(){
		var EnglishLetterWord=document.getElementById('EnglishLetterWord');
		var sicknessAllBox=document.getElementById('sicknessAllBox');
        for (var i = 0; i < EnglishLetter.length; i++) {
        	var EnglishBigBox=document.createElement("div");
        	EnglishBigBox.className="EnglishBigBox";
        	var EnglishBox=document.createElement("a");
            EnglishBox.innerHTML=EnglishLetter[i].word;
            EnglishBox.href=EnglishLetter[i].href;
            EnglishBigBox.appendChild(EnglishBox);
            EnglishLetterWord.appendChild(EnglishBigBox)
        };
        for (var b = 0; b < sicknessAll.length; b++) {
        	var sicknessAllWord=document.createElement("div");
        	sicknessAllWord.className="sicknessAllWord";
        	var sicknessAllName=document.createElement("a");
        	sicknessAllName.className="sicknessAllName";
        	sicknessAllName.href="#";
        	sicknessAllName.innerHTML=sicknessAll[b].word;
        	sicknessAllWord.appendChild(sicknessAllName);
        	sicknessAllBox.appendChild(sicknessAllWord);
        	if (sicknessAll[b].name!="") {
        		sicknessAllWord.style.width="100%";
        		sicknessAllWord.style.height="80px";
        		sicknessAllName.style.lineHeight="80px";
        		sicknessAllName.style.fontSize="28px";
        		sicknessAllWord.style.backgroundColor="#eee";
        	    sicknessAllName.name=sicknessAll[b].name;
        	}else{
        		sicknessAllWord.style.width="90%";
        		sicknessAllWord.style.borderBottom="2px solid #cacaca";
        	};
        	if (b==0) {
        		sicknessAllWord.style.width="0";
        		sicknessAllWord.style.height="0";
        	};
        	if (sicknessAll[b+1].name!="") {
        		sicknessAllWord.style.borderBottom="none";
        	}
        }
	}
}