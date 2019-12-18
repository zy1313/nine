$(()=>{
    class Smallpic{
        constructor(data,slidpx,wz,width1,width2,width3,width4){
            this.data=data;
            this.root=null;
            this.slidpx=slidpx;
            this.width1=width1;
            this.width2=width2;
            this.width3=width3;
            this.width4=width4;
            this.wz=wz;
            this.index=0;
        }
        init(){
            this.rendUI();
            this.insert();
            this.control();
            this.addClick();

        }
        rendUI(){
            var html=""
            this.data.ocontent.map(ele=>html+=` <a href="./list.html" class="slidea" style="width:${this.width3}px"><img src=${ele.op} alt="">
                <div class="smallTitle">${ele.ot}</div>
                <div class="smallPrice">${ele.opri}</div></a>`).join("")
          var html2="";
            for(var i=0;i<3;i++){
                html2+=`<span class="dot ${i==0?"act":""}"></span>`
            }

            this.root=document.createElement("div");
            // this.root.className="foorStyle";
            // this.root.style.width=this.width;
           this.root.innerHTML=`
           <div class="foorStyle" style="width:${this.width1}px">
                <a href="./list.html" class="foorTitle">
                    <div class="algin" style="width:${this.width2}px">
                        <b>${this.data.titleA}</b>
                        <span>${this.data.titleB}</span>
                    </div>
                </a>
                <a href="./list.html" class="foorPic">
                    <img src=${this.data.lapic} alt="" style="width:${this.width2}px">
                </a>
                <div class="foorSlid" style="width:${this.width2}px">
                    <div class="slideContent" style="width:${this.width2}px">
                        <ul style="width:${this.width4}px">${html}</ul>
                    </div>
                    <div class="slideBulle" style="width:${this.width2}px">
                        ${html2}
                    </div>
                    <div class="contLeft">
                        <svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false"
                            class="font-12 fa-icon" data-v-27f2b81a="">
                            <path
                                d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-96.3 96.5 96.4 96.4c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.7c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-0.1-34z">
                            </path>
                        </svg>
                    </div>
                    <div class="contRight">
                        <svg aria-hidden="true" width="8" height="16" viewBox="0 0 256 512" focusable="false"
                            class="font-12 fa-icon" data-v-27f2b81a="">
                            <path
                                d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9l22.5-22.8c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6 0.1 34z">
                            </path>
                        </svg>
                    </div>
                </div>
                </div>
           `
            
        }
        insert(){
            $(".foor_justify").eq(this.wz).append($(this.root))
        }
        // 左右两边的控制按钮
        control(){
            $(this.root).find(".contLeft").click(()=>{
                this.index--;
                if(this.index<0) this.index=0;
                $(this.root).find("ul")[0].style.transform=`translateX(-${this.slidpx*this.index}px)`;
                $(this.root).find(".dot").eq(this.index).addClass("act").siblings().removeClass("act")  ;   
            })
            $(this.root).find(".contRight").click(()=>{
                this.index++;
                if(this.index>2) this.index=2;
                $(this.root).find("ul")[0].style.transform=`translateX(-${this.slidpx*this.index}px)`;
                $(this.root).find(".dot").eq(this.index).addClass("act").siblings().removeClass("act");
              
            })
        }
        // 点击小圆点进行图片切换
        addClick(){
            let self=this;
            var ospans=this.root.querySelectorAll(".dot");
            Array.from(ospans).forEach((ele,index)=>{
                ele.onclick=function(){
                    console.log("+++");
                Array.from(ospans).forEach(ele => ele.classList.remove("act"));
                this.classList.add("act");
                self.root.querySelector("ul").style.transform=`translateX(-${self.slidpx*index}px)`;
                }
            })
        }

    }

    // 渲染第二个和第四个楼层
    $.getJSON("../../server/louTow.json",function (data) {
            console.log(data);
            let m=new Smallpic(data[0],333,0); m.init()
            let m1=new Smallpic(data[1],333,0); m1.init()
            let m2=new Smallpic(data[2],333,0); m2.init()
            // 参数分别为数据、移动的距离、第几个$(".foor_justify")、class="foorStyle"的宽度、class="foorSlid"的宽度
            // 每一个装着图片的a标签的宽度、ul的宽度
            let m3=new Smallpic(data[3],555,1,580,555,180,1700); m3.init()
            let m4=new Smallpic(data[4],555,1,580,555,180,1700); m4.init()
            
        }
    );
    $(".foor_justify").eq(1).css("margin-bottom","50px")

})