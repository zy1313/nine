$(()=>{
    // let pho=Cookie.get("phone");
    // let pwd=Cookie.get("password")
    //      if(pho&&pwd){
    //             $.ajax({
    //                 type: "post",
    //                 url: "../../server/login.php",
    //                 data: `phone=${pho}&password=${pwd}`,
    //                 success(response) {
    //                     window.location.href = "./home.html"; 
    //                 }
    //             });
    //         }

     /* 给标签添加点击事件,切换登录方式 */
     $(".login-right-top").on("click", "a", function () {
        console.log("+++");
        $(this).addClass("xs").siblings().removeClass("xs");
        console.log();
        if ($(this).index() == 0) {
            $(".login-right-center").eq(0).css("display", "block").siblings().css("display", "none")
        } else {
            $(".login-right-center").eq(1).css("display", "block").siblings().css("display", "none")
        }
    })


    // 当两个输入框都有值得时候，才能点击按钮。
    $("#username-ID").on("blur",function(){
        usernameVal =$.trim($("#username-ID").val()) ;
        if(usernameVal.length!=0){
            $("#password-ID").on("input",function(){
            passwordVal =$.trim($("#password-ID").val());
            if(passwordVal.length!=0){
                $(".login-button").addClass("active");
 
            }else{
                $(".login-button").removeClass("active")
            } 
        }) 
        }else{
            alert("请输入手机号")
        }
          if($.trim($("#password-ID").val()).length!=0 && $.trim($("#username-ID").val()).length!=0){
            $(".login-button").addClass("active");
            $(".login-button").click(function(){
                sendRequest()
            })
        }  
    }) 


 
    $("#password-ID").blur(function(){
        let phoval=$.trim($("#password-ID").val())
        if(phoval.length!=0 && $.trim($("#username-ID").val()).length!=0){
            $(".login-button").addClass("active");
            let res=`phone=${$("#username-ID").val()}&password=${$("#password-ID").val()}`
            sendRequest(res)   
            }
    })
    
      function sendRequest(data){
          $(".login-button").click(function(){
            $.ajax({
                type: "post",
                url: "../../server/login.php",
                data: data,
                dataType: "json",
                success(response) {
                    if (response.status == "success") {
                        if($("#check").is(":checked")){
                            Cookie.set("phone",$("#username-ID").val(),90)
                            Cookie.set("password",$("#password-ID").val(),90)
                        }
                         /* 存储登录数据到本地 */
                        localStorage.username = $("#username-ID").val();
                        localStorage.id = response.data.userId;

                        window.location.href = "./home.html";
                    } else {
                        alert(response.data.msg);
                    }
                }
            });
        })
      }  
  
        
    
    
})