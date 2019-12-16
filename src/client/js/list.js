
$(()=>{
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
        // JSON.parse()
        html+=JSON.parse(this.data.pic).map((ele,index)=>`<a href="" class="small"><img src=${ele} alt="" class="${index==0?"active":""}"></a>`).join("");
        this.root=document.createElement("li");
        this.root.innerHTML=`<a href="" class="picb"><img src=${this.data.img} alt=""></a>
        <div class="picm">${html}</div>
        <a href="" class="title">${this.data.title}</a>
        <div class="pop"><span>￥${this.data.price}</span></div>
        <p>${this.data.des}</p>`
        $(".content").append($(this.root));
        }

        toggle(){
            // 图片切换
            $(this.root).find(".small>img").on("mouseenter",function(){
                $(this).addClass("active").parent().siblings().children().removeClass("active");
                let osrc=$(this).attr("src")
               $(this).parent().parent().prev().children("img").attr("src",osrc)               
                
            })
            // 给li标签添加边框
            $(this.root).hover(function(){
                $(this).addClass("current")
            },function(){
                $(this).removeClass("current")
            })
        }
    }

    // $.ajax({
    //     type: "get",
    //     url: "../../server/list.php",
    //     data: "data",
    //     dataType: "json",
    //     success(data) {
    //         // let data=JSON.parse(response)
    //         data.forEach(ele=>new List(ele).init())
            
    //     }
    // });
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
            ha+=`<a href="javascript:;">${i+1}</a>`
        }
        $("#page").html(ha)
    }
});

getData(1)
// 发送网络请求获取数据
function getData(index){
    $.ajax({
        type: "get",
        url: "../../server/listGetdata.php",
        data: `page=${index}`,
        dataType: "json",
        success: function (response) {
            //  let result=JSON.parse(response)
            response.forEach(ele=>new List(ele).init())
            console.log(response);
            
            
        }
    });
}



})