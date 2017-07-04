console.log($("#second"))
var First = document.querySelector("#Firset");
var First_firsr = $("#firset_firset").css("display");
var Second_second = $("#second_second").css("display");
console.log(First_firsr)
console.log(Second_second)
First.addEventListener("touchend", function(){  

   if (First_firsr==="none"&&Second_second==="none") {
   	$("#firset_firset")[0].style.display="block";
   	$("#second_second")[0].style.display="none";
    $(".clerrer_bible")[0].style.display ="block";
    $(".Pet_sex")[0].style.display ="none";
   }else if (First_firsr==="block"&&Second_second==="none") {
    $("#firset_firset")[0].style.display="block";
    $("#second_second")[0].style.display="block";
    $(".clerrer_bible")[0].style.display ="block";
    $(".Pet_sex")[0].style.display ="none";
   }else if (First_firsr==="none"&&Second_second==="block") {
    $("#firset_firset")[0].style.display="block";
    $("#second_second")[0].style.display="none";
    $(".clerrer_bible")[0].style.display ="block";
    $(".Pet_sex")[0].style.display ="none";
   };  
});
var Second = document.querySelector("#Second")
Second.addEventListener("touchend", function(){  
     if (First_firsr==="none"&&Second_second==="none") {
   	$("#second_second")[0].style.display="block";
   	$("#firset_firset")[0].style.display="none";
    $(".clerrer_bible")[0].style.display ="block";
    $(".Pet_sex")[0].style.display ="none";
   }else if (First_firsr==="none"&&Second_second==="block") {
    $("#second_second")[0].style.display="block";
    $("#firset_firset")[0].style.display="none";
    $(".clerrer_bible")[0].style.display ="block";
    $(".Pet_sex")[0].style.display ="none";
   }else if (First_firsr==="block"&&Second_second==="none") {
   	$("#firset_firset")[0].style.display="none";
    $("#second_second")[0].style.display="block";
    $(".clerrer_bible")[0].style.display ="block";
    $(".Pet_sex")[0].style.display ="none";
    
   };  
}); 
var Pet_sex_back = document.querySelector("#Pet_sex_back")
Pet_sex_back.addEventListener("touchend", function(){  
   $(".clerrer_bible")[0].style.display ="block";
   $(".Pet_sex")[0].style.display ="none";  
});         