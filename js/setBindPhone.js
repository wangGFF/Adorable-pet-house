 $(function(){
    var scHeight=window.screen.availHeight;
    var topHeight=$(".top_sickness").height();
    $(".petListBox").css("height",scHeight-topHeight+"px");
})
 $(function(){
    $('.huoquYan').click(function(){
        function a(a){
            return window.location.href.split('?')[1].split('=')[a];
        } 
        $.ajax({
            type:"get",
            dataType:"text",
            url:"http://juhuituan.boguyuan.com/juhuituan/smsApp?action=sendCode&acode=1&un="+$('#phoneNumber').val()+"&loainType=1&type=1",
            error:function(XMLHttpRequest,textStatus,errorThrown){},
            success:function(date){
                date = JSON.parse(date);
                $.ajax({
                    type:"get",
                    dataType:"text",
                    url:"http://juhuituan.boguyuan.com/juhuituan/loginApp?action=reg&acode=1&un="+$('#phoneNumber').val()+"&mcode="+date.sdCode+"&loainType=1&type=1",
                    error:function(XMLHttpRequest,textStatus,errorThrown){},
                    success:function(data){
                        data = JSON.parse(data);
                        $(".input2").val(date.sdCode);
                        $(".submitPhone").click(function(e){
                            if ($(".input2").val()!=date.sdCode) {
                                alert("验证码错误,请重新输入");
                                e.preventDefault();
                            }else{
                                alert("修改成功");
                            }

                        })
                    }
                })    
            }
        })
    })
}) 
 $(function(){
    $(".submitPhone").click(function(e){
        if ($(".inputPw1").val().length>=6&&$(".inputPw1").val().length<=16&&$(".inputPw2").val().length>=6&&$(".inputPw2").val().length<=16) {
            if ($(".inputPw1").val()!=$(".inputPw2").val()) {
                alert("请重新输入密码");
                $(".inputPw2").val("");
                e.preventDefault();
            }else{
                alert("修改成功");
            }
        }else{
            $(".inputPw1").val("");
            $(".inputPw2").val("");
            e.preventDefault();
            alert("输入的密码只能为6-16位字符");
        }
    })
 })