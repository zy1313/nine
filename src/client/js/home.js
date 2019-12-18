$(() => {
    // 导航栏顶部的网站导航
    var web = [{
        "otitle": "九机特色",
        "ocontent": ["附近门店", "一手优品", "二手良品", "旧机回收", "预约维修", "九机小店"]
    }, {
        "otitle": "服务集市",
        "ocontent": ["在线支付", "话费充值", "试用中心", "帮助中心", "九机服务","会员俱乐部 "
        ]
    }, {
        "otitle": "招商合作",
        "ocontent": ["供应商申请", "IT服务", "商务合作"]
    }, {
        "otitle": "更多精选",
        "ocontent": ["九机头条", "人才招聘"]
    }, {
        "otitle": "产品选择",
        "ocontent": ["手机", "手机配件", "电脑办公", "时尚影音", "智能家居", "娱乐竞技"]
    }]       
    var res11=web.map(ele=>{
    var res12=ele.ocontent.map(ele=>`<a href="">${ele}</a>`).join("")
    return  `<li class="wdli"><h3>${ele.otitle}</h3><div class="wdd">${res12}</div></li>`})
    $(".wd").html(res11)
    $(".wd").find("h3").eq(1).css("color","#a776d9")
    $(".wd").find("h3").eq(2).css("color","#78b")
    $(".wd").find("h3").eq(3).css("color","#73ae37")
    
    // 首页顶部的滑入事件
    $(".yangshi,.yangshiqq").hover(function () {
        $(this).children().css("display", "block")
    }, function () {
        $(this).children().css("display", "none")
    })
    // 轮播图的右边区域
    $.getJSON("../../server/hometop2.json", data => {
        var html = data.map(ele =>
            `<a href=""> <img src=${ele.img} alt=""><div>${ele.title}</div></a>`).join("")
        $(".right-nav-foot").html(html)
    })

    // 渲染轮播图
    let item = ["https://img2.ch999img.com/newstatic/1382/0148b2c546c719d6.jpg",
        "https://img2.ch999img.com/newstatic/1383/01490defe0e6ff88.jpg",
        "https://img2.ch999img.com/newstatic/1382/0147bbc0f8b85895.jpg",
        "https://img2.ch999img.com/newstatic/1379/01458e535b65ce3a.jpg"
    ];
    $(".banner-center").banner(item)


    // 渲染最后的楼层
    $.getJSON("../../server/lou.json", function (data) {
        var html = "";
        data.map(ele => {
            html1 = ele.right.map(ele => {
                return `<a href="./list.html">
                    <img src="${ele.minimg}" alt="">
                    <p>${ele.name}</p>
                    <i>${ele.pis}</i>
                </a>`
            }).join("")

            html += `<div class="stairs">
                <div class="stairs-left">
                    <h3>${ele.title}</h3>
                    <img src="${ele.bigimg}" alt="">
                </div>
                <div class="stairs-right">${html1}</div>
            </div>`

        })
        $(".stairsWrap").html(html)

    });

    // 渲染第二个楼层
    var data1 = [{
        "title1": "吉玛仕 笔记本内胆包",
        "title2": "精细做工,彰显品质",
        "timg": "https://img2.ch999img.com/pic/product/216x216/20190815141515882.jpg.webp"
    }, {
        "title1": "Yeelight Z1充电折叠台灯",
        "title2": "三挡调光,40小时续航,折叠收纳",
        "timg": "https://img2.ch999img.com/pic/product/216x216/20191021135847191.jpg.webp"
    }, {
        "title1": "斗禾DH-QN03家用桌面暖风机",
        "title2": "1800W大功率,3档调节,倾倒断电,过热保护",
        "timg": "https://img2.ch999img.com/pic/product/216x216/20191216091718194.jpg.webp"
    }]
    var data2 = [{
        "title1": "锐思 苹果lightning 数据线",
        "title2": "金属接头 经久耐用",
        "timg": "https://img2.ch999img.com/pic/product/440x440/20190705143021407.jpg.webp"
    }, {
        "title1": "公牛 GN-96033 插座",
        "title2": "扩展插孔 独立开关",
        "timg": "https://img2.ch999img.com/pic/product/440x440/20190808165221514.jpg.webp"
    }, {
        "title1": "笔记本桌面散热支架",
        "title2": "小巧便携 散热防滑",
        "timg": "https://img2.ch999img.com/pic/product/440x440/20190712184815937.jpg.webp"
    }]

    function render(data, index, color) {
        var res1 = data.map(ele =>
            `<a href="./list.html">
        <div class="ft" style="color:${color}">${ele.title1}</div>
        <div class="ff">${ele.title2}</div>
        <img src=${ele.timg} alt="">
    </a>  `).join("")
        document.querySelectorAll(".free")[index].innerHTML = `<div class="ftitle">
        <b>免费试用</b>
        <a href="">
            <span>更多试用请扫码至移动端参与</span>
            <svg data-v-4b986458="" aria-hidden="true" width="14" height="16" viewBox="0 0 448 512"
                focusable="false" class="grey-9 fa-icon">
                <path
                    d="M0 224v-192h192v192h-192zM64 96v64h64v-64h-64zM256 32h192v192h-192v-192zM384 160v-64h-64v64h64zM0 480v-192h192v192h-192zM64 352v64h64v-64h-64zM416 288h32v128h-96v-32h-32v96h-64v-192h96v32h64v-32zM416 448h32v32h-32v-32zM352 448h32v32h-32v-32z">
                </path>
            </svg>
        </a>
    </div>
    <div class="fcontent">${res1}</div>`
    }
    render(data1, 0)
    render(data2, 1, "#744E8C")
    $(".fcontent>a").hover(function () {
        $(this).css("box-shadow", "1px 1px 1px 1px #ccc")
    }, function () {
        $(this).css("box-shadow", "")
    })


    // 渲染第三个楼层
    $.getJSON("../../server/louThree.json",
        function (data) {
            $(".weekr").html(data.map(ele => ` <a href="./list.html">
       <img src=${ele.timg} alt="">
       <div class="wtitle">${ele.title1}</div>
       <div class="wprice">${ele.title2}</div>
        </a>`).join(""))
            $(".weekr>a").hover(function () {
                $(this).css("box-shadow", "1px 1px 1px 1px #ccc")
            }, function () {
                $(this).css("box-shadow", "")
            })
        });

        // // 渲染固定定位
        // var ofix=[
        //   {"pimg":"https://img2.ch999img.com/newstatic/1381/01437ad73129fceb.png",
        //     "oc":"购物车"
        //     },
        //     {"pimg":"https://img2.ch999img.com/newstatic/1379/01437a0a38bf22b0.png",
        //     "oc":"附近门店"
        //     },
        //     {"pimg":"https://img2.ch999img.com/newstatic/1383/01437ada542d1a04.png",
        //     "oc":"咨询客服"
        //     },
        //     {"pimg":"https://img2.ch999img.com/newstatic/1378/01437ae3894b6f1c.png",
        //     "oc":"投诉意见"
        //     },
        //     {"pimg":"https://img2.ch999img.com/newstatic/1377/01437ae979c6dd1d.png",
        //     "oc":"<img src='https://img2.ch999img.com/newstatic/1381/01456921b634952f.jpg'>"
        //     },
        //     {"pimg":"https://img2.ch999img.com/newstatic/1379/01437af815221659.png",
        //     "oc":"产品对比"
        //     }]  
        // var fixhtml="";
        // fixhtml+=ofix.map(ele=>`<div class="item"><a href=""><img src=${ele.pimg} alt=""><span>${ele.oc}</span></a></div>`).join("")
        // $(".tool-item").html(fixhtml)

        // 固定定位的划过效果
        $(".item").hover(function(){
            $(this).css("background","#f21c1c").siblings().css("background","#333")
            $(this).children().children("span").css("visibility","visible").css("opacity","1")
        },function(){
            $(this).css("background","#333").children().children("span").css("visibility","hidden").css("opacity","0")
        })

        $(".toolButtom").click(function(){           
            window.scrollTo(0,0)   
        })

})