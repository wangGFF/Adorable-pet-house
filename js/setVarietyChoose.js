var allData = {}; 
(function() {
    var that = this;
    var xhr1 = new XMLHttpRequest();
    xhr1.onreadystatechange = function() {
        if (xhr1.readyState == 4) {
            that.data = JSON.parse(xhr1.responseText).data;
            // console.log(that.data);
            allData = that.data;
            // console.log(allData.dogDog)
            var DogDog = Vue.extend({
                template: "#dogDog",
                data:function(){
                	return{
                		word:allData.dogDog,
                		eword:allData.EnglishLetter
                	}
                }
            });
            var CatCat = Vue.extend({
                template: "#catCat",
                data:function(){
                	return{
                		word:allData.catCat,
                		eword:allData.EnglishLetter
                	}
                }
            });
            var OthersAnimal = Vue.extend({
                template: "#othersAnimal",
                data:function(){
                	return{
                		word:allData.othersAnimals,
                		eword:allData.otherEng
                	}
                }
            });
            var router = new VueRouter();
            router.map({
                '/dogDog': {
                    component: DogDog
                },
                '/catCat': {
                    component: CatCat
                },
                '/othersAnimal': {
                    component: OthersAnimal
                }
            });
            router.redirect({
                '/': '/dogDog'
            });
            var App = Vue.extend({});
            router.start(App, "#setApp");
			var dogDogBox=document.getElementsByClassName("dogDogBox");
			for (var i = 0; i < allData.dogDog.length; i++) {
				if (allData.dogDog[i].name!="") {
                    dogDogBox[i].style.height="20px";
                    dogDogBox[i].style.lineHeight="20px";
                    dogDogBox[i].style.backgroundColor="#eaeaea";
				}
				if (allData.dogDog[i+1].name!="") {
                    dogDogBox[i].style.borderBottom="none";
				};
				if (i==0) {
					dogDogBox[i].style.marginTop="20px";
				}
			}
			
        }
    }
    xhr1.open("post", "json/setVarietyChoose.json", true);
    xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr1.send("acode=1&uid=22387&type=1");
} ())
