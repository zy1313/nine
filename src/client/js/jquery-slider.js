(function(){
class Slider {
    constructor(data,weizi) {
        this.weizi=weizi;
        this.data = data;
        this.index = 0;
        this.timer = null;
        this.root = null;
    };
    init() {
        this.render();
        this.sliderBtn();
        $(".slider-img").eq(0).css("zIndex", 1);
        $(".slider-btn").eq(0).addClass("active");
        this.auto();
        this.click();
        this.enterStop();
    };
    render() {
        let result = this.data.map((ele) => {
            return `<li class="slider-img"><img src="${ele}" alt=""></li>`
        }).join("");
        let html = "";

        for (var i = 0, len = this.data.length; i < len; i++) {
            html += `<li class="slider-btn"></li>`
        };
        let a = `
                <ul class="imglist">${result}</ul>
                <div class="check"><span class="check-r"> &gt;</span><span class="check-l"> &lt;</span></div>
                <div class="btn">${html}</div>`
        this.root = $(`<div class="box">${a}</div>`);
        $(this.weizi).append(this.root)
    };
    sliderBtn() {
        console.log($(".slider-btn"));
        self = this;
        $(".slider-btn").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            let index = $(this).index();
            $(".slider-img").eq(index).css("zIndex", 1).siblings().css("zIndex", 0);
        })
    };
    animate(index) {
        $(".slider-btn").eq(index).addClass("active").siblings().removeClass("active");
        $(".slider-img").eq(index).css("zIndex", 1).siblings().css("zIndex", 0);
    };
    check(method) {
        if (method == "next") {
            this.index++;
            if (this.index == this.data.length) this.index = 0;
        };
        if (method == "prev") {
            this.index--;
            if (this.index == -1) this.index = this.data.length - 1;
        };
        this.animate(this.index)
    };
    auto() {
        clearInterval(this.timer);
        this.timer = setInterval(() => this.check("next"), 2000);
    };
    click() {

        $(".check-l").click(() => { this.check("prev") });
        $(".check-r").click(() => { this.check("next") })
    };
    enterStop() {
        this.root.mouseenter(() => clearInterval(this.timer));
        this.root.mouseleave(() => this.auto());
    }
}

$.fn.extend(
    {
        banner(data){
            // let m=new Manager(data,this[0]);
            // m.init()
            this.each(function(){
                let m=new Slider(data,this);
                m.init()
            })
        }
    }
) 


})(jQuery)