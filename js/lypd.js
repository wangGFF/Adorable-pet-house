var data = [];
function createData(data_all){
    data = data_all.data.list;
  }

window.onload = function () {
  creataList(data);
};
function creataList(data) {
  var box = document.getElementById("list");
  for (var i = 0; i < data.length; i++) {
    
    var a = document.createElement("a");
    a.className = "item item-thumbnail-left";
    a.href = "#";
    box.appendChild(a);

    var img = document.createElement("img");
    img.src = "img/"+ data[i].img + ".png";
    a.appendChild(img);

    var h2 = document.createElement("h2");
    h2.id = "h2";
    h2.innerHTML = data[i].name;
    a.appendChild(h2);
    var img1 = document.createElement("img");
    img1.id = "img1";
    img1.src = "img/"+ data[i].sex + ".png";
    h2.appendChild(img1);

    var p = document.createElement("p");
    p.id = "p";
    p.innerHTML = data[i].detail;
    a.appendChild(p);
    
    var p1 = document.createElement("p");
    p1.id = "p1";
    p1.innerHTML = data[i].address;
    a.appendChild(p1);
    var img2 = document.createElement("img");
    img2.id = "img2";
    img2.src = "img/"+ data[i].address_img + ".png";
    p1.appendChild(img2);
    
  }
console.log(box);
}
var datas = [];
function zhonglei(data_all){
    datas = data_all.zhonglei;
    console.log(datas);
    }
$(function () {
  var col = 0;
  $(".qb").click(function () {

    col++;
    if (col%2 == "0") {
      $(".bj").css("color","#808080");
      $(".qb").css("color","#808080");
      $(".qb").html("全部 <img src='img/lingyangpeidui_normal@2x.png'>");
      $('.nav').next().remove();
    } else {
      $(".bj").css("color","#808080");
      $(".qb").css("color","#df4442");
      $(".qb").html("全部 <img src='img/lingyangpeidui_xiala@2x.png'>");
      xiala();
    }
  });
  function xiala() {
    var wid = $(".qb").width() +"px";
    var ul = $("<ul id='ul'></ul>");
    for (var i = 0; i < datas.length; i++) {
        var li = $("<li>"+datas[i]+"</li>");
        li.appendTo(ul);
      }
      ul.css({"width": wid,"left":wid});
    $('.nav').after(ul);
    var uls = $("ul")[0];
    console.log(uls);
  }
  
});
