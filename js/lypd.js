var app = angular.module('app', []);
app.controller('main', function ($scope, $http) {
  $http.get('json/lypd.json')
  .success(function (res) {
    
    if (res.errno === 0) {
      $scope.list = res.data
    }
  })
  //bj
  $scope.bj = function(){
    $http.get('json/ssejld.json')
    .success(function (res) {
    $scope.ullis = res.provinces;
    displays();
    })
  }
  //shiqu
  $scope.shiqu = function(){
    $http.get('json/ssejld.json')
    .success(function (res) {
      var slen = res.provinces;
      var sjejldli = document.getElementsByClassName("sjejldli");
    for (var i = 0; i < sjejldli.length; i++) {
      sjejldli[i].index = i;
      sjejldli[i].onclick=function () {
        var key = this.index;
        $scope.ulli = slen[key].citys;
        display();
      }
    }
    
    })
  }
  //qb
  $scope.all = function(){
    $http.get('json/news.json')
    .success(function (res) {
    if (res.errno === 0) {
      $scope.lis = res.data
    }
    position();
    })
  }
  //zt
  $scope.zt = function(){
    $http.get('json/news.json')
    .success(function (res) {
    if (res.errno === 0) {
      $scope.lis = res.datas
    }
    positions();
    })
  }

});
var app = $('#app')[0];
var all = $('#all');
var qb = $('#qb');
var bj = $('#bj');
var shiqu = $('#shiqu');
var sjejld = $('#sjejld');
var sq = $('#sq');
//var list = document.querySelector(".list");
        window.onresize = set;
        set();
        function set(){
			var windowWidth = document.documentElement.clientHeight;
			app.style.height = windowWidth -118 + "px";
			app.style.overflow = "auto";
		}
  function displays(){
    $("#sjejld").css({"display":"block"})
  }
  function display(){
    $("#shiqu").css({"display":"block"})
  }
  function position() {
  	sjejld.hide();
    var wid = $('#qb').width()+"px";
    all.css({"display":"block","width": wid,"left":wid});
  };
  function positions() {
  	sjejld.hide();
    var wid = $('#zt').width()+"px";
    var lef = $('#zt').width()*2+"px";
    all.css({"display":"block","width": wid,"left":lef});
  };
  all.click(function(){
    all.hide();
    nocolor();
  });
  shiqu.click(function(){
    shiqu.hide();
    sjejld.hide();
    nocolor();
  });
  
  $("body").click(function(){
    all.hide();
    // $('#sjejld').hide();
  });

  var k=document.getElementsByClassName("k"); 
    for (var i = 0; i < k.length; i++) {
        k[i].index = i;
        k[i].onclick=function () {
        for (var i = 0; i < k.length; i++) {
          k[i].style.color = "#808080";
          k[i].innerHTML = k[i].innerText+"<img src='img/lingyangpeidui_normal@2x.png'>";
        };
        k[this.index].style.color = "#df4442";
        k[this.index].innerHTML = k[this.index].innerText+"<img src='img/lingyangpeidui_xiala@2x.png'>";
        }
    }
    function nocolor() {
      var k=document.getElementsByClassName("k");
      for (var i = 0; i < k.length; i++) {
          k[i].style.color = "#808080";
          k[i].innerHTML = k[i].innerText+"<img src='img/lingyangpeidui_normal@2x.png'>";
        };
    }