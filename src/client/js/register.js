/* 整体思路：表单验证 + 图形验证码 + 手机短信验证 + 注册请求 */
$(() => {

    /* 实现图形验证码 */
    let captcha1 = new Captcha({
        dotNum: 10,
        lineNum: 20,
        fontSize: 40,
        length: 4,
       
    });
    let code;
    captcha1.draw(document.querySelector('canvas'), r => {
        console.log(r, '验证码1');
        code = r.toUpperCase();
    });


var flag=true 
$("span").click(()=>{
    // 判断手机号
if(!/^1[3-9]\d{9}$/.test($.trim($("#phone").val()))){
        $(".title").css("display","block")
        $(".title").text("请输入正确的手机号码")
    setTimeout(()=>$(".title").css("display","none"),3000)
    flag=false;
}else if(flag==false){ 
    // $("#pic").trigger("blur")
    // 
    $("#pic").blur(function(){
    if($("#pic").val()!=code ||$("#pic").val().length==0){  
     $(".title").css("display","block")
    $(".title").text("请输入正确的验证码")
    setTimeout(()=>$(".title").css("display","none"),3000)
    }else{
        $(".title").css("display","none") 
    }
   
})
}
})


$("span").click(function(){

$("#passwordA").trigger("blur")
    $("#passwordA").blur(function(){
        if($.trim($("#passwordA").val()).length==0){
            $(".title").css("display","block")
            $(".title").text("请设置密码")
            setTimeout(()=>$(".title").css("display","none"),3000)
        }else if(!/[0-9a-zA-Z]{6}/.test($.trim($("#passwordA").val())) ||$.trim($("#passwordA").val()).length!=6){
            $(".title").css("display","block")
            $(".title").text("密码格式不正确")
            setTimeout(()=>$(".title").css("display","none"),3000)
        }else{
            $("#passwordA").blur(function(){
                if($.trim($("#passwordA").val())==$.trim($("#passwordB").val())&& $.trim($("#passwordA").val())!=""){
                   
                    $.ajax({
                        type: "post",
                        url: "../../server/register.php",
                        data: `phone=${$.trim($("#phone").val())}&password=${$.trim($("#passwordA").val())}`,
                        dataType: "json",
                        success: function (data) {
                            if (data.status == "success") {
                                console.log("+++++");
                                
                                window.location.href = "http://127.0.0.1/12PHP/Nine/src/client/html/login.html";
                            } else {
                                alert(data.data.msg)
                            }
                            
                        }
                    });
                   
                   
                    // window.location.href="http://127.0.0.1/12PHP/Nine/src/client/html/login.html";
                
                
                
                }else{
                    $(".title").css("display","block")
                    $(".title").text("两次输入的密码不一致")
                    setTimeout(()=>$(".title").css("display","none"),3000)
                }
            })
        }
    })
   
})





if($(".title").text()==""){
    $("span").css("background","red")
}
$(".title").click(()=>{
    $.ajax({
        type: "post",
        url: "url",
        data: "data",
        dataType: "dataType",
        success: function (response) {
            
        }
    });
})




});