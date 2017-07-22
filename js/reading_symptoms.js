//紧急自救狗狗各种情况返回
var Grumpy_back = document.querySelector("#grumpy_back");
Grumpy_back.addEventListener("touchend", function(){  
     location.href="../dog_mind_reading.html"; 
});
var Grumpy_share = document.querySelector("#grumpy_share");
console.log(Grumpy_share)
Grumpy_share.addEventListener("touchend", function(){  
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
var For_Help = document.querySelector("#For_help");
For_Help.addEventListener("touchend", function(){  
    location.href="../fahelp.html";
});