$(()=>{
    class Smallpic{
        constructor(data,slidpx){
            this.data=data;
            this.root=null;
            this.slidpx=slidpx;
            this.index=0;
        }
        init(){
            this.rendUI();
            this.insert();
            this.control()

        }
        rendUI(){
            var html=""
            this.data.ocontent.map(ele=>html+=` <a href="" class="slidea"><img src=${ele.op} alt="">
                <div class="smallTitle">${ele.ot}</div>
                <div class="smallPrice">${ele.opri}</div></a>`).join("")
          var html2="";
            for(var i=0;i<3;i++){
                html2+=`<span class="dot ${i==0?"act":""}"></span>`
            }

            this.root=document.createElement("div");
            this.root.className="foorStyle";
           this.root.innerHTML=`
                <a href="" class="foorTitle">
                    <div class="algin">
                        <b>${this.data.titleA}</b>
                        <span>${this.data.titleB}</span>
                    </div>
                </a>
                <a href="" class="foorPic">
                    <img src=${this.data.lapic} alt="">
                </a>
                <div class="foorSlid">
                    <div class="slideContent">
                        <ul>${html}</ul>
                    </div>
                    <div class="slideBulle">
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
           `
            
        }
        insert(){
            $(".foor_justify").append($(this.root))
        }

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

    }


    $.getJSON("../../server/louTow.json",function (data) {
            console.log(data);
            let m=new Smallpic(data[0],333); m.init()
            let m1=new Smallpic(data[1],333); m1.init()
            let m2=new Smallpic(data[2],333); m2.init()
            
        }
    );
})