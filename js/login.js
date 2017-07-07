$(function(){
	     //正则验证手机号
                function isPhoneNo(phone) { 
                         var pattern = /^1[34578]\d{9}$/;
                         return pattern.test(phone); 
                }
        //密码正则验证
                function isPassWord(password){
                    var pwd = /^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,16}$/;
                    console.log(pwd.test(password));
                    return pwd.test(password);
                }
        //字符串截取
                function a(a){
                        return window.location.href.split('?')[1].split('&')[a]; 
                }
        //ajax数据请求
	        $('.b_phone>input').val(a(1));
			$('.b_password>input').val(a(2));
		$('.right_btn').click(function(){
			var phone = $('.b_phone>input').val();
			var password = $('.b_password>input').val();
		    if (phone!==''&&isPhoneNo(phone)==true&&isPassWord(password)==true&&password!=='') {
			    $.ajax({
					   	type:'post',
					   	datatype:'text',
					   	url:"http://juhuituan.boguyuan.com/juhuituan/loginApp?action=login&un="+phone+"&pwd="+password+"&acode=1",
					    error:function(XMLHttpRequest, textStatus, errorThrown){},
					    success:function(data){
					    	date=JSON.parse(data);
					    	console.log(date.code)
					    	if (date.code==100) {
					    		alert('登录成功')
					    }else {
					    	alert('手机号或密码错误')
					    }

					}
			   })
		    }else if (phone=='') {
		    	$('.b_phone>input').focus();
		    	alert('请填写手机号')
		    }else if (password=='') {
		    	$('.b_password>input').focus();
		    	alert('请填写密码')
		    }else if (isPhoneNo(phone)==false) {
		    	$('.b_phone>input').focus();
		    	alert('手机号格式错误')
		    }else if (isPassWord(password)==false) {
		    	$('.b_phone>input').focus();
		    	alert('密码格式错误')
		    }
		})
		$('.b_btn>.left_btn').click(function(){
			window.location.href='modify.html';
		})
		$('.header>sapn').click(function(){
			window.location.href='start.html';
		})
	})