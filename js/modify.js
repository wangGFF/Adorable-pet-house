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
                    else {
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
        //字符串截取
                function a(a){
                        return window.location.href.split('?')[1].split('&')[a]; 
                }
        //在注册一遍获取uid后才进行密码修改
        $('#verification').click(function(){
            var phone = $('.b_phone>input').val();
            var password = $('.b_password>input').val();
            var passwordS = $('.b_passwordS>input').val();

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
                        $.ajax({
                            type:'post',
                            datatype:'text',
                            url:"http://juhuituan.boguyuan.com/juhuituan/smsApp?action=sendCode&acode=1&un="+phone+"&loginType=1&type=1",
                            error:function(XMLHttpRequest, textStatus, errorThrown){},
                            success:function(data){
                                date=JSON.parse(data);
                                var mcode= date.sdCode;
                                console.log(mcode)
                                $('.b_verification>input').val(mcode)
                              $.ajax({
                                type:'post',
                                datatype:'text',
                                url:"http://juhuituan.boguyuan.com/juhuituan/loginApp?action=reg&acode=1&un="+phone+"&pwd="+password+"&mcode="+mcode+"",
                                error:function(XMLHttpRequest, textStatus, errorThrown){},
                                success:function(data){
                                   date=JSON.parse(data);
                                   console.log(date)
                                   console.log(date.data.uid)
                                   var uid=date.data.uid;
                                $('.save').click(function(){
                                    if (password===passwordS&&isPassWord(password)==true&&isPassWord(passwordS)==true) {
                                        $.ajax({
                                            type:'post',
                                            datatype:'text',
                                            url:"http://juhuituan.boguyuan.com/juhuituan/loginApp?action=pwd&acode=1&uid="+uid+"&pwd="+password+"&repwd="+passwordS+"",
                                            error:function(XMLHttpRequest, textStatus, errorThrown){},
                                            success:function(data){
                                                date=JSON.parse(data);
                                                console.log(date.code)
                                                if (date.code==100) {
                                                    window.location.href="login.html?&"+phone+"&"+password+""
                                                }
                                    }
                                })
                            }else if (password!==passwordS) {
                                        alert('密码不一致');
                                        $('#passwordS>input').focus().val('');
                                    }else if (isPassWord(password)==false||isPassWord(passwordS)==false) {
                                        alert('请输入包含有字母、数字及特殊字符的密码');
                                        $('#password>input').focus().val('');
                                        $('#passwordS>input').val('');

                                        }
                            })
                        }
                    })
                }
            })
        }
    })

    //左上角点击返回
    $('.header>span').click(function(){
        window.location.href="login.html?";
    })






















})