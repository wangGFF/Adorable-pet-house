var data = {
news : [
	{
		title: '狗狗品种',
		type: 'jinru@2x.png',
		id:'first'
	},
	{
		title: '狗狗性别',
		type: 'jinru@2x.png',
		id:'second'
	},
	{
		title: '狗狗年龄',
		type: 'jinru@2x.png',
		id:'three'
	}
 ]
 
}
new Vue({
el: '#test',
data: data
})

// $("#first")
// $()
// $()
// $()
var backg = document.querySelector("#back")
backg.addEventListener("touchend", function(){  
     location.href="clearer_bible.html";  
});
var dog_backg = document.querySelector("#dog_back")
dog_backg.addEventListener("touchend", function(){  
     location.href="weight_test.html";  
});
var weight_test = document.querySelector("#first");

weight_test.addEventListener("touchend", function(){  
       $("#Dog_varieties")[0].style.display="block";
       $(".clerrer_bible")[0].style.display ="none" ;
});
var You_Save = document.querySelector("#second");
You_Save.addEventListener("touchend", function(){  
       $(".Pet_sex")[0].style.display ="block" ;
       $(".clerrer_bible")[0].style.display ="none" ;
}); 
var dog_heart = document.querySelector("#three");
dog_heart.addEventListener("touchend", function(){  
    //    $('#popWindow')[0].style.display = 'block';  
    //    $('#maskLayer')[0].style.display = 'block'; 
}); 
var test_back = document.querySelector("#Test_back")
test_back.addEventListener("touchend", function(){  
     location.href="weight_test.html";  
});
calculate
var Calculate = document.querySelector("#calculate")
Calculate.addEventListener("touchend", function(){  
     $("#Test_results")[0].style.display ="block" ;
     $(".clerrer_bible")[0].style.display ="none" ;
 });
$("#three").shijian({
        y:-10//当前年份+10
       })  
// var dog_heart = document.querySelector("#year_NO");
// dog_heart.addEventListener("touchend", function(){  
//      $('#popWindow')[0].style.display = 'none';  
//      $('#maskLayer')[0].style.display = 'none';   
// }); 
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
        	sicknessAllName.href="weight_test.html";
        	sicknessAllName.innerHTML=sicknessAll[b].species;
        	sicknessAllWord.appendChild(sicknessAllName);
        	sicknessAllBox.appendChild(sicknessAllWord);
        	if (sicknessAll[b].name!="") {
        		sicknessAllWord.style.width="100%";
        		sicknessAllWord.style.height="40px";
        		sicknessAllName.style.lineHeight="40px";
        		sicknessAllName.style.fontSize="1.5rem";
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
        	// if (sicknessAll[b+1].name!="") {
        	// 	sicknessAllWord.style.borderBottom="none";
        	// }
        }
	}
}





