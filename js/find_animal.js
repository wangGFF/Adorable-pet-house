var app=angular.module("myApp",[]);
app.controller("main",function($scope,$http){
	$http.get("json/data.json").success(function(res){
		$scope.data=res.find;
		console.log(res);
	});
});
$(".back").click(function(){
        window.history.back(-1);
    })