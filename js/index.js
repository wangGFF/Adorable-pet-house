var alldata= {};
(function(){
var that = this;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if (xhr.readyState==4) {
        that.data = JSON.parse(xhr.responseText).data;
            // console.log(that.data);
            allData = that.data;
            // console.log(allData.list.length)
            		//然后，创建两个组件构造器circle和information：
		var circle = Vue.extend({
			template: '#circle',
			data: function() {
				return{
					list:allData.list,
					gz_list:allData.gz_list
				}
			},
			methods:{
		  	clickdiv:function(eid){
		  		var xhr = new XMLHttpRequest();
			     xhr.onreadystatechange = function(){
			     	if (xhr.readyState==4) {
			     		console.log(xhr.responseText);
			     	}

			     }
			     xhr.open('post','index.json',true);
			     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			     xhr.send("id="+eid+"");
			     // window.location.href='http:www.baidu.com';
		  	}
		  }
		})

		var information = Vue.extend({
			template: '#information'
		})
		var service = Vue.extend({
			template: '#service'
		})
		var my = Vue.extend({
			template: '#my'
		})

		//第二步 调用构造器VueRouter，创建一个路由器实例router。
		var router = new VueRouter()
		
//第三步： 调用router的map方法映射路由，每条路由以key-value的形式存在，key是路径，value是组件。
// 例如：'/circle'是一条路由的key，它表示路径；{component: circle}则表示该条路由映射的组件。
		router.map({
			'/circle': {
				component: circle
			},
			'/information': {
				component: information
			},
			'/service': {
				component: service
			},
			'/my': {
				component: my
			}

		})
// 应用在首次运行时右侧是一片空白，应用通常都会有一个首页，例如：circle页。
// 使用router.redirect方法将根路径重定向到/circle路径：
		router.redirect({
			'/': '/circle'
		})

		/*第六步： 启动路由  */
		var App = Vue.extend({})
		router.start(App, '#app');
    }
}
    xhr.open("post", "index.json", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("acode=1&uid=22387&type=1");
}())
$(function(){
	$('.header>span:nth-child(1)').click(function(){
		$('.box').css('display','block');
		$('.box1').css('display','none');
		$('.header>span:nth-child(1)').css('border-bottom','4px solid white');
		$('.header>span:nth-child(2)').css('border-bottom','none');
	});
	$('.header>span:nth-child(2)').click(function(){
		console.log('1');
		$('.box').css('display','none');
		$('.box1').css('display','block');
		$('.header>span:nth-child(2)').css('border-bottom','4px solid white');
		$('.header>span:nth-child(1)').css('border','none')		 
		 	var span5 = $('.content_box1 .up_div span:nth-child(5)');
		 	span5.each(function(){
		 			console.log($(this).html())
		 			if ($(this).html()==='已关注') {
		 				$(this).css({'color':'gray','border':'2px solid gray'});
		 			}else{
		 				$(this).css({'color':'red','border':'2px solid red'});
		 			}
		 	}).click(function(){
		 			if ($(this).html()==='+关注') {
		 				$(this).css({'color':'gray','border':'2px solid gray'});
		 				$(this).html('已关注')
		 			}
		});
	});
	$('#quanzi').click(function(){
		window.location.reload();
	});	
    $('.content_box .bottom_div span:nth-child(2) li span:nth-child(1) img').click(function(){
    	$('.mengban1').css('display','block');
    	$('.mengban2').css('display','block');
    	console.log(1);
    	$('.mengban2').click(function(){
    		$('.mengban1').css('display','none');
    	    $('.mengban2').css('display','none');
    	});

    })
    $('.content_box1 .bottom_div span:nth-child(2) li span:nth-child(1) img').click(function(){
		$('.mengban1').css('display','block');
		$('.mengban2').css('display','block');
		console.log(1);
		$('.mengban2').click(function(){
			$('.mengban1').css('display','none');
		    $('.mengban2').css('display','none');
		});
    })
    $('.content_box .up_div span:nth-child(5)').click(function(){
            window.location.href = 'focus.html';
    })




















})

