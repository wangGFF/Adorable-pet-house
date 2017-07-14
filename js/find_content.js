$(function(){
	$(".back").click(function(){
        window.history.back(-1);
    });
    $(".send").click(function(){
    	window.location.href="find_animal.html"
    })
})