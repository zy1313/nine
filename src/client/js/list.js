$(() => {

    // 完成每个li的功能
    class List {
        constructor(data) {
            this.data = data;
            this.root = null;
        }
        init() {
            this.rendUI();
            this.toggle();
        }
        rendUI() {
            var html = ""
            html += JSON.parse(this.data.pic).map((ele, index) => `<a href="" class="small"><img src=${ele} alt="" class="${index==0?"active":""}"></a>`).join("");
            this.root = document.createElement("div");
            this.root.innerHTML = `<li class="listli"><a href="" class="picb"><img src=${this.data.img} alt=""></a>
        <div class="picm">${html}</div>
        <a href="" class="title">${this.data.title}</a>
        <div class="pop"><span>￥${this.data.price}</span></div>
        <p>${this.data.des}</p></li>`
            $(".content").append($(this.root));
            // $(".content").html($(this.root));
        }

        toggle() {
            // 图片切换
            $(this.root).find(".small>img").on("mouseenter", function () {
                $(this).addClass("active").parent().siblings().children().removeClass("active");
                let osrc = $(this).attr("src")
                $(this).parent().parent().prev().children("img").attr("src", osrc)

            })
            // 给li标签添加边框
            $(this.root).find(".listli").hover(function () {
                $(this).addClass("current")
            }, function () {
                $(this).removeClass("current")
            })
        }
    }


    // 发送网络请求获取页码
    $.ajax({
        type: "get",
        url: "../../server/listGetpage.php",
        // data: "data",
        dataType: "json",
        success(data) {
            console.log(data.count);
            var ha = "";
            for (let i = 0; i < data.count; i++) {
                ha += `<a href="javascript:;" class="${i==0?"active":""}">${i+1}</a>`
            }
            $("#page").html(ha);
            $("#page>a").click(function () {
                $(this).addClass("active").siblings().removeClass("active");
                $(".content").html("");
                getData($(this).text(), 0)
            })
        }
    });

    getData(1, 0)
    // 发送网络请求获取数据
    function getData(index, type) {
        $.ajax({
            type: "get",
            url: "../../server/listGetdata.php",
            data: `page=${index}&sortType=${type}`,
            dataType: "json",
            success: function (response) {
                //  let result=JSON.parse(response)
                response.forEach(ele => new List(ele).init())
                console.log(response);


            }
        });
    }

    // 排序功能
    $(".listTop>span").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        $(".content").html("");
        getData(1, $(this).index())

    })

    // 列表页左边部分的展开功能
    let flag=true;
    $(".aTow").click(()=>{
        // 每次点击+ - 号会切换
        if(flag){
           $(".aTow").css("border","red 1px solid").css("color","red").text("-") 
           flag=false
        }else{
            $(".aTow").css("border","black 1px solid").css("color","black").text("+") 
            flag=true
        }
        // 切换展开收起
        $(".odd").toggle()
    })
    // 滑过时变颜色
    $(".odd").children().hover(function(){
        $(this).css("color","red").siblings().css("color","#cccccc")
    })



// 渲染列表页的左边部分
    var res = [{
        "otitle": "浏览了最终购买了",
        "des": [{
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20191209202257675.jpg.webp",
            "ot": "华为 Mate 30 （TAS-AN00）全网通5G版",
            "op": "￥4999"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20191209195431227.jpg.webp",
            "ot": "华为 Mate 30 Pro （LIO-AN00）全网通5G版",
            "op": "￥6899"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20191209195324785.jpg.webp",
            "ot": "Apple iPhone 11 （A2223）全网通",
            "op": "￥5199"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20191203135001394.jpg.webp",
            "ot": "华为 nova 6 （WLZ-AN00）全网通5G版",
            "op": "￥3799"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20191209202346892.jpg.webp",
            "ot": "Apple iPhone 11 Pro （A2217）全网通",
            "op": "￥7799"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20191210162246425.jpg.webp",
            "ot": "红米 Redmi K30 全网通4G版",
            "op": "￥1899"
        }]
    }, {
        "otitle": "浏览了还购买了",
        "des": [{
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20190918174315781.jpg.webp",
            "ot": "苹果 iPhone 11 硅胶 定制保护壳",
            "op": "￥159"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20190918174326391.jpg.webp",
            "ot": "苹果 iPhone 11 硅胶 定制保护壳",
            "op": "￥159"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/2019091817433616.jpg.webp",
            "ot": "苹果 iPhone 11 硅胶 定制保护壳",
            "op": "￥159"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20190918174354884.jpg.webp",
            "ot": "苹果 iPhone 11 硅胶 定制保护壳",
            "op": "￥159"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/2019082717475340.jpg.webp",
            "ot": "乐物 iPhone 11 Pro Max 磨砂防摔保护壳",
            "op": "￥109"
        }, {
            "osrc": "https://img2.ch999img.com/pic/product/440x440/20190918174345911.jpg.webp",
            "ot": "苹果 iPhone 11 硅胶 定制保护壳",
            "op": "￥159"
        }]
    }]
   var h=res.map(ele=>{
      var result= ele.des.map(ele=>
        ` <a href=""><img src=${ele.osrc} alt=""><div class="achild"><p>${ele.ot}</p><p>${ele.op}</p> </div></a>`).join("")
        return `<div class="cate-list"><h4>${ele.otitle}</h4>${result}</div>`
   }).join("")
    document.querySelector(".listCateWarp").innerHTML=h;

})