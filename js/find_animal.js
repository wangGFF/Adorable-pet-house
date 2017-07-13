var app=angular.module("myApp",[]);
app.controller("main",function($scope,$http){
	$http.get("C:/Users/蓝科教育/Documents/GitHub/Adorable-pet-house/json/data.json").success(function(res){
		$scope.data=res.find;
		console.log(res);
	});
});
$(".back").click(function(){
        window.history.back(-1);
    })