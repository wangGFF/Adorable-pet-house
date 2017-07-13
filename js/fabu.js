var app=angular.module("app",[]);
app.controller("main",function($scope){
	$scope.NotW=false;
	$scope.content=function(){
		if(this.msg.length>=500){
		    $scope.NotW=!$scope.NotW;
	    }
	}	
});
$(".back").click(function(){
        window.history.back(-1);
    })