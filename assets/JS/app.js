function slideNavbar(e){
    const nav = document.querySelector("nav");
    if(e.checked){
        nav.style.height='130px';
    }else{
        nav.style.height=0;
    }
}
const points = document.querySelectorAll(".point");
const leftSlide =document.querySelector(".fa-arrow-left");
const rightSlide = document.querySelector(".fa-arrow-right");
var n = Number(document.querySelector("[data-slider]").getAttribute("data-slider"));
check();
leftSlide.addEventListener("click",()=>{
    if(n>1){
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n-1));
        n--;
    }else if(n==1){
        n=5;
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n)); 
    }
    check();
});
rightSlide.addEventListener("click",()=>{
    if(n<5){
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n+1));
        n++;
    }else if(n==5){
        n=1;
       document.querySelector("[data-slider]").setAttribute("data-slider",String(n)); 
    }
    check();
});
points.forEach((point,i)=>{
    point.addEventListener("click",()=>{
        n=i+1;
        document.querySelector("[data-slider]").setAttribute("data-slider",String(n));
        check();
    });
});
function check(){
    for(let i=0; i<5;i++){
        if(i==(n-1)){
            points[i].classList.add("show");
        }else{
            points[i].classList.remove("show");
        }
    }
}
