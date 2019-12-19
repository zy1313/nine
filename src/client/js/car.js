$(()=>{
    let showText = localStorage.username ? localStorage.username + ",欢迎你！" : "请登录";
    $(".userInfo").text(showText);
    if (localStorage.username) {
        $(".status").text("注销");
    } else {
        $(".status").text("登录");
    }

    $(".status").click(function() {
        if ($(this).text() == "注销") {
            localStorage.removeItem("username");
            localStorage.removeItem("id");
            window.location.href = "./list.html";
        } else {
            window.location.href = "./login.html";
        }
    })




    loadCart();

    function loadCart() {
        $(".carList").remove();
        $.ajax({ //获取商品数据
            data: { type: "get", id: localStorage.id },
            url: "../../server/car.php",
            dataType: "json",
            success: function(res) {
                console.log(res);
                renderUI(res)
                // $(res.data).each((index, ele) => {
                //     renderUI(ele);
                // })
            }
        });
    }

    function renderUI(data) {
        let tmp="";
        tmp+= data.map((item,index) => {
            return ` <div class="carList" gid=${item.good_id}>
            <div class="tf">
            <input type="checkbox" id="carcheck${index}">
            <label for="carcheck${index}"></label>
            </div>
            <div class="pic">
                <a href="">
                    <img src=${item.img} alt="">
                </a>
                <p>${item.title}</p>
            </div>
            <div class="lprice">${item.price}</div>
            <div class="lcount">
              <a href="javascript:," class="reduce">-</a>  
              <input type="text" id="counts" disabled="disabled" value=${item.num}>
            <a href="javascript:," class="plus">+</a>
        </div>
            <div class="ltotal" data-price=${item.price}>${item.price*item.num}</div>
            <div class="laction">删除</div>
        </div>`
        }).join('');
        $(tmp).insertAfter('.carItem');
    }

    $("body").on("click", "#all", function() {
        // $(this).next("label").toggleClass("mark");
        /* 设置页面中所有的复选框都选中 */
        $("body").find("input[type='checkbox']").next("label").toggleClass("mark");
        totalMoney();

    })



    $("body").on("click", ".plus,.reduce", function() {
        /* 更改数量|发送网络请求 */
        let count;
        if (this.className == "plus") {
            count = $(this).prev().val() * 1 + 1;
            $(this).prev().val(count);
        } else {
            count = $(this).next().val() * 1 - 1;
            $(this).next().val(count);
        }

        let price = $(this).parents(".carList").find(".ltotal").data().price;
        $(this).parents(".carList").find(".ltotal").text(price * count);

        let gid = $(this).parents(".carList").attr("gid");
        updateCartData(this.className, gid, localStorage.id);
        totalMoney();
    });

    function updateCartData(flag, good_id, id) {
        $.ajax({
            url: "../../server/car.php",
            data: {
                type: "update",
                flag,
                id,
                good_id
            }
        });
    }

/* 删除功能 */
$("body").on("click", ".laction", function() {
    let good_id = $(this).parents(".carList").attr("gid");
    $.ajax({
        url: "../../server/car.php",
        data: { type: "del", good_id, id: localStorage.id },
        dataType: "json",
        success: function(response) {
            console.log(response);
            loadCart();
        }
    });
})


    function totalMoney() {
        console.log("计算总价");
        let total_count = 0;
        let total_price = 0;

        $(".carList").each((index, ele) => {
            if ($(ele).find("input[type='checkbox']").next().hasClass("mark")) {
                let count = $(ele).find("#counts").val() * 1;
                let price = $(ele).find(".ltotal").text() * 1;
                total_count += count;
                total_price += price;
            }

        });

        $(".red1").text(total_count);
        $(".red").text(total_count);
        $(".red2").text("￥" + total_price.toFixed(2));
    };

})