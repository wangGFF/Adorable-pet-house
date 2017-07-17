	$(function(){
		var InterValObj; //timer变量，控制时间
		var count = 60; //间隔函数，1秒执行
		var curCount;//当前剩余秒数
		$('#verification').click(function(){
        curCount = count;
        $("#verification").html(""+curCount+"s");
        InterValObj = window.setInterval(SetRemainTime, 1000); //启动计时器，1秒执行一次
		})
		//timer处理函数
        function SetRemainTime() {
            if (curCount == 0) {                
                window.clearInterval(InterValObj);//停止计时器
                $("#verification").removeAttr("disabled");//启用按钮
                $("#verification").html("重新发送");
            }
            else if (curCount!==0){
                $("#verification").attr('disabled','true')
                curCount--;
                $("#verification").html(""+curCount+"s" );
                
            }
        }
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

        //获取验证码
            $('.b_verification>#verification').click(function(){
                var phone = $('#phone>input').val();
                var password = $('#password>input').val();
                var passwordS = $('#passwordS>input').val(); 
                if (phone!==''&&isPhoneNo(phone)==false) {
                     alert('手机号码格式错误');
                     window.clearInterval(InterValObj);
                     $("#verification").html("发送验证码");
                     $('#phone>input').focus();
                }else if (phone==''){
                     window.clearInterval(InterValObj);
                     alert('请填写手机号');
                     $('#phone>input').focus();
                     $("#verification").html("发送验证码");
                }else if (phone!==''&&isPhoneNo(phone)==true) {
                //ajax请求验证码数据
                      $.ajax({
                    type:'post',
                    datatype:'text',
                    url:"http://juhuituan.boguyuan.com/juhuituan//smsApp?action=sendCode&acode=1&loginType=1&type=1&un="+phone+"",
                    error:function (XMLHttpRequest, textStatus, errorThrown) { },
                    success:function(data){
                        console.log(phone);  
                        date = JSON.parse(data);
                        console.log(date.sdCode);
                        $('.b_verification>input').val(date.sdCode)
                        $('#register').click(function(){
                     window.clearInterval(InterValObj);

                            var mcode = date.sdCode; 
                            var phone = $('#phone>input').val();
                            var password = $('#password>input').val();
                            var passwordS = $('#passwordS>input').val(); 
                            $.ajax({
                                type:'post',
                                datatype:'text',
                                url:"http://juhuituan.boguyuan.com/juhuituan//loginApp?action=reg&un="+phone+"&pwd="+password+"&mcode="+mcode+"&acode=1",
                                error:function(XMLHttpRequest, textStatus, errorThrown){},
                                success:function(data){
                                    if (password===passwordS&&isPassWord(password)==true&&isPassWord(passwordS)==true) {
                                        alert('注册成功');
                                        window.location.href="login.html?&"+phone+"&"+password+""
                                    }else if (password!==passwordS) {
                                        alert('密码不一致');
                                        $('#passwordS>input').focus();
                                    }else if (isPassWord(password)==false||isPassWord(passwordS)==false) {
                                        alert('请输入包含有字母、数字及特殊字符的密码');
                                        $('#password>input').focus();

                                    }
                                }
                            })
                        })
                    }
                })

                }
            })
       




































})
	











