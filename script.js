const flexNonr1 = document.querySelector(".flex-none1");
const flexNonr2 = document.querySelector(".flex-none2");
const flexNonr3 = document.querySelector(".flex-none3");
const flexNonr4 = document.querySelector(".flex-none4");
const flexNonr5 = document.querySelector(".flex-none5");

const arrowBtn1 = document.querySelector("#arrow1");
const arrowBtn2 = document.querySelector("#arrow2");
const arrowBtn3 = document.querySelector("#arrow3");
const arrowBtn4 = document.querySelector("#arrow4");
const arrowBtn5 = document.querySelector("#arrow5");

arrowBtn1.addEventListener("click",()=>{
    flexNonr1.style.display = "block";
})
arrowBtn2.addEventListener("click",()=>{
    flexNonr2.style.display = "block";
})
arrowBtn3.addEventListener("click",()=>{
    flexNonr3.style.display = "block";
})
arrowBtn4.addEventListener("click",()=>{
    flexNonr4.style.display = "block";
})
arrowBtn5.addEventListener("click",()=>{
    flexNonr5.style.display = "block";
})
