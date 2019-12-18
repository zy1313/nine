$(() => {
    // 从路径里获取参数
    var str = decodeURI(window.location.search.slice(1));
    console.log(str);
    if (str.length == 0) str = `title=华为 nova 5i 全网通版 幻夜黑 8GB+128GB  【火热销售】6.4英寸极点全面屏，海思麒麟710&lprice=￥299&oimg0=https://img2.ch999img.com/pic/product/440x440/20190621164124730.jpg.webp&oimg1=https://img2.ch999img.com/pic/product/440x440/20190621164111257.jpg.webp&oimg2=https://img2.ch999img.com/pic/product/440x440/20190621164114504.jpg.webp
&oimg3=https://img2.ch999img.com/pic/product/440x440/20191111112612289.jpg.webp`;

    function queryString2Obj(queryString) {
        var o = {};
        var arr = queryString.split("&"); //["name=zs","age=10","className=H5"];
        arr.forEach(function (item) {
            var data = item.split("="); //["name","zs"];
            var key = data[0];
            var val = data[1];
            o[key] = val;
        })
        return o;
    }
    // 根据参数渲染放大镜
    var data = queryString2Obj(str);
    $(".glass-right-top").children("h3").text(data.title);
    $(".low-price").children("span").text(data.price);
    $(".bigimg").children("img").attr("src", data.oimg0);
    $(".samllimg").children("img").eq(0).attr("src", data.oimg0);
    $(".samllimg").children("img").eq(1).attr("src", data.oimg1);
    $(".samllimg").children("img").eq(2).attr("src", data.oimg2);
    $(".samllimg").children("img").eq(3).attr("src", data.oimg3);
    console.log($(".bigimg").children("img"));
    // 调用放大镜（使用插件）
    fangdajing({
        ele: 'box', //最外层盒子的id(必填)
        imglist: [data.oimg0, data.oimg1, data.oimg2,
            data.oimg3
        ], //图片数据(必填)
        scal: 2, //大图放大倍数(选填,默认是2倍)
        speed: 1, //小图运动的图片个数(选填,默认是一次动一张图)
        Width: 80, //小图的宽度 宽度 + 左右边框 左右padding
        BoPa: 8 //左右边框加左右padding的和
    });
    // 跑马灯效果
    var res = [{
        "osrc": "https://img2.ch999img.com//pic/brand/20170519185626_6859.jpg",
        "otext": "魅族"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20170519185532_7641.jpg",
        "otext": "苹果"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20181107144138_6019.jpg",
        "otext": "荣耀"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20170519185640_5272.jpg",
        "otext": "vivo"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20170519185654_0131.jpg",
        "otext": "OPPO"
    }, {
        "osrc": "https://img2.ch999img.com//pic/product/210x90/201309270439180.jpg",
        "otext": "三星"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20170519190414_7726.jpg",
        "otext": "一加"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20191121104314_2460.jpg",
        "otext": "iQOO"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20190904141258_9902.jpg",
        "otext": "realme"
    }, {
        "osrc": "https://img2.ch999img.com//pic/brand/20170519190332_5117.jpg",
        "otext": "诺基亚"
    }]

    var result = res.map(ele => `<li class="brand-item">
            <a href=""><img src=${ele.osrc} alt="">
            <span>${ele.otext}</span></a></li>`).join("")
    $(".roll").html(result)
    var s = 0
    setInterval(function(){
        s+=52;
        if(s>520) s=0;
        $(".roll")[0].style.transform=`translateY(-${s}px)`;
        // $(".roll").eq(0).insertAfter(($(".roll").eq(-1)));

    },1000)


    /* function Textrolling() {
        t = parseInt(x.css('top'));
        y.css('top', '252px');
        x.animate({
            top: t - 52 + 'px'
        }, 'slow'); //19为每个li的高度
        if (Math.abs(t) == h - 52) { //19为每个li的高度
            y.animate({
                top: '0px'
            }, 'slow');
            z = x;
            x = y;
            y = z;
        }
        setTimeout(Textrolling, 1000); //滚动间隔时间 现在是3秒
    }
    $('.swap').html($('.roll').html());
    x = $('.roll');
    y = $('.swap');
    h = $('.roll li').length * 52; //19为每个li的高度
    setTimeout(Textrolling, 1000); //滚动间隔时间 现在是3秒 */
    // 渲染左边浏览过还买了
    var data1 = [{
        "src": "https://img2.ch999img.com/pic/product/70x70/20191203135001394.jpg.webp",
        "title": "华为 nova 6 （WLZ-AN00）全网通5G版",
        "price": "3799"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191216203128621.jpg.webp",
        "title": "vivo X30 全网通5G版",
        "price": "3298"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191210161713573.jpg.webp",
        "title": "红米 Redmi K30 全网通4G版",
        "price": "2199"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191126164153038.jpg.webp",
        "title": "华为 荣耀 V30 （OXF-AN00）全网通5G版",
        "price": "3699"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191216201927558.jpg.webp",
        "title": "vivo X30 Pro 全网通5G版",
        "price": "3998"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191210175535888.jpg.webp",
        "title": "红米 Redmi K30 全网通5G版",
        "price": "2299"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191126175117177.jpg.webp",
        "title": "华为 荣耀 V30 Pro （OXF-AN10）全网通5G版",
        "price": "4199"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191122171720356.jpg.webp",
        "title": "华为 畅享 10S （AQM-AL00）全网通版",
        "price": "1699"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191209203733177.jpg.webp",
        "title": "vivo S5 全网通版",
        "price": "2698"
    }, {
        "src": "https://img2.ch999img.com/pic/product/70x70/20191105155701736.jpg.webp",
        "title": "小米 CC9 Pro 全网通版",
        "price": "2999"
    }]

    var data2 = [{
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209202257675.jpg.webp",
        "title": "华为 Mate 30 （TAS-AN00）全网通5G版",
        "price": "4999",
        "des": "已有1人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209195431227.jpg.webp",
        "title": "华为 Mate 30 Pro （LIO-AN00）全网通5G版",
        "price": "6899",
        "des": "已有1人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209195324785.jpg.webp",
        "title": "Apple iPhone 11 （A2223）全网通",
        "price": "5199",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191203135001394.jpg.webp",
        "title": "华为 nova 6 （WLZ-AN00）全网通5G版",
        "price": "3799",
        "des": "已有1人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191210161713573.jpg.webp",
        "title": "红米 Redmi K30 全网通4G版",
        "price": "2199",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209202346892.jpg.webp",
        "title": "Apple iPhone 11 Pro （A2217）全网通",
        "price": "7799",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20190918174315781.jpg.webp",
        "title": "苹果 iPhone 11 硅胶 定制保护壳",
        "price": "159",
        "des": "已有0人关注"
    },{
        "src": "https://img2.ch999img.com/pic/product/440x440/20190918174326391.jpg.webp",
        "title": "苹果 iPhone 11 硅胶 定制保护壳",
        "price": "159",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/2019091817433616.jpg.webp",
        "title": "苹果 iPhone 11 硅胶 定制保护壳",
        "price": "159",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20190918174354884.jpg.webp",
        "title": "苹果 iPhone 11 硅胶 定制保护壳",
        "price": "159",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/2019082717475340.jpg.webp",
        "title": "乐物 iPhone 11 Pro Max 磨砂防摔保护壳",
        "price": "109",
        "des": "已有0人关注"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20190918174345911.jpg.webp",
        "title": "苹果 iPhone 11 硅胶 定制保护壳",
        "price": "159",
        "des": "已有0人关注"
    }]
    var data3 = [{
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209195324785.jpg.webp",
        "title": "Apple iPhone 11 （A2223）全网通",
        "price": "5199"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191203135001394.jpg.webp",
        "title": "华为 nova 6 （WLZ-AN00）全网通5G版",
        "price": "3799"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209195431227.jpg.webp",
        "title": "华为 Mate 30 Pro （LIO-AN00）全网通5G版",
        "price": "6899"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209202257675.jpg.webp",
        "title": "华为 Mate 30 （TAS-AN00）全网通5G版",
        "price": "4999"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20191209202632298.jpg.webp",
        "title": "华为 P30 Pro （VOG-AL00）全网通版",
        "price": "4488"
    }, {
        "src": "https://img2.ch999img.com/pic/product/440x440/20190618233537253.jpg.webp",
        "title": "Apple iPhone XS Max (A2104) 全网通版",
        "price": "5899"
    }]

    var text1 = data1.map(ele => ` <li class="tab-item"><a href="javascript:">
    <img src=${ele.src} alt=""><div class="text"><p>${ele.title}</p><span>九机价:</span><em>${ele.price}</em>
    </div></a></li> `).join("")
    $(".sameUl").html(text1)

    var text2 = data2.map(ele => ` <li class="tab-item"><a href="javascript:">
    <img src=${ele.src} alt=""><div class="text"><p>${ele.title}</p><span>九机价:</span><em>${ele.price}</em>
    <i>${ele.des}</i></div></a></li> `).join("")
    $(".buyUl").html(text2)

    var text3 = data3.map(ele => ` <li class="tab-item"><a href="javascript:">
    <img src=${ele.src} alt=""><div class="text"><p>${ele.title}</p><span>九机价:</span><em>${ele.price}</em>
    </div></a></li> `).join("")
    $(".sameUl").eq(1).html(text3)

})