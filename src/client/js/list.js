
$(()=>{

    // 完成每个li的功能
    class List{
        constructor(data){
            this.data=data;
            this.root=null;
        }
        init(){
            this.rendUI();
            this.toggle();
        }
        rendUI(){
        var html=""
        html+=JSON.parse(this.data.pic).map((ele,index)=>`<a href="" class="small"><img src=${ele} alt="" class="${index==0?"active":""}"></a>`).join("");
        this.root=document.createElement("div");
        this.root.innerHTML=`<li><a href="" class="picb"><img src=${this.data.img} alt=""></a>
        <div class="picm">${html}</div>
        <a href="" class="title">${this.data.title}</a>
        <div class="pop"><span>￥${this.data.price}</span></div>
        <p>${this.data.des}</p></li>`
        $(".content").append($(this.root));
        // $(".content").html($(this.root));
        }

        toggle(){
            // 图片切换
            $(this.root).find(".small>img").on("mouseenter",function(){
                $(this).addClass("active").parent().siblings().children().removeClass("active");
                let osrc=$(this).attr("src")
               $(this).parent().parent().prev().children("img").attr("src",osrc)               
                
            })
            // 给li标签添加边框
            $("li").hover(function(){
                $(this).addClass("current")
            },function(){
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
        var ha="";
        for(let i=0;i<data.count;i++){
            ha+=`<a href="javascript:;" class="${i==0?"active":""}">${i+1}</a>`
        }
        $("#page").html(ha);
        $("#page>a").click(function(){
            $(this).addClass("active").siblings().removeClass("active");
            $(".content").html("");
            getData($(this).text(),0)
        })
    }
});

getData(1,0)
// 发送网络请求获取数据
function getData(index,type){
    $.ajax({
        type: "get",
        url: "../../server/listGetdata.php",
        data: `page=${index}&sortType=${type}`,
        dataType: "json",
        success: function (response) {
            //  let result=JSON.parse(response)
            response.forEach(ele=>new List(ele).init())
            console.log(response);
            
            
        }
    });
}

// 排序功能
$(".listTop>span").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(".content").html("");
    getData(1,$(this).index())
    
})

})