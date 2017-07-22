//紧急自救狗狗各种情况返回
var Trainingdog_back = document.querySelector("#trainingdog_back");
Trainingdog_back.addEventListener("touchend", function(){  
     location.href="../Pet_training.html"; 
});
var Burn_Share = document.querySelector("#Burn_share");
Burn_Share.addEventListener("touchend", function(){  
     $("#popWindow")[0].style.display = "block";
     $("#maskLayer")[0].style.display = "block";
});

var weixin = document.querySelector("#weixin");
weixin.addEventListener("touchend", function(){  
     $("#popWindow")[0].style.display = "none";
     $("#maskLayer")[0].style.display = "none";
});
var frent = document.querySelector("#frent");
frent.addEventListener("touchend", function(){  
     $("#popWindow")[0].style.display = "none";
     $("#maskLayer")[0].style.display = "none";
});
var QQ = document.querySelector("#QQ");
QQ.addEventListener("touchend", function(){  
     $("#popWindow")[0].style.display = "none";
     $("#maskLayer")[0].style.display = "none";
});
var QQkongjian = document.querySelector("#QQkongjian");
QQkongjian.addEventListener("touchend", function(){  
     $("#popWindow")[0].style.display = "none";
     $("#maskLayer")[0].style.display = "none";
});
var weibo = document.querySelector("#weibo");
weibo.addEventListener("touchend", function(){  
    $("#popWindow")[0].style.display = "none";
     $("#maskLayer")[0].style.display = "none";
});
var fuzhilianji = document.querySelector("#fuzhilianji");
fuzhilianji.addEventListener("touchend", function(){  
     $("#popWindow")[0].style.display = "none";
     $("#maskLayer")[0].style.display = "none";
});

