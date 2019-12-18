
// 二级导航栏
$(() => {
    $.getJSON("../../server/sec_Nav.json",
        function (data) {
            
            let nav2 = document.querySelector(".second-nav");
            let html = "";
            for (let i = 0; i < data.length; i++) {
                let html1 = data[i].num1.map(function (ele) {
                    return `<a href="">${ele}</a>`
                }).join("");
    
                // let html2=data[i].num2.map(function(e){
                //     return`<dt>${e}</dt>`
                // }).join("");
                var res = "";
                for (var j = 0; j < data[i].num3.length; j++) {
                    var html2 = data[i].num3[j].map(function (e) {
                        return `<a href="./list.html">${e}</a>`
                    }).join("")
                    var html3 = `<dl>
                                    <dt>${data[i].num2[j]}</dt>
                                    <dd>${html2}</dd>
                                </dl>`
                    res += html3
                }
    
                let html4 = data[i].imgs.map(function (num) {
                    return `<img src="${num}" alt="">`
                }).join("")
    
                html += `<div class="second-nav-case">
                            <div class="second-nav-case-1">
                            <i style=${data[i].bg}></i><h3>${data[i].number}</h3>
                                <span>></span>
                            </div>
                            <div class="second-nav-case-2">${html1}
                            </div>
                            <div class="second-nav-right">
                                <div class="second-nav-right-box">
                                ${res}
                                </div>
                                <div class="second-nav-right-img">${html4}
                                </div>
                            </div>
                        </div> 
                        `
                    }
                nav2.innerHTML = html;

                
        $(".second-nav-case").hover(function(){
            $(this).children(".second-nav-right").css("display","block")
        },function(){
            $(this).children(".second-nav-right").css("display","none")
        })


        });
})