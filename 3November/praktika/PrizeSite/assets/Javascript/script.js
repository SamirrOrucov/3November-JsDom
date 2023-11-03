const button=document.querySelector("button")
const container=document.querySelectorAll(".img-cont")
for (let i = 0; i<=4; i++) {
    button[i].addEventListener("click",function () {
        console.log("salam");
        container[i].style.filter="blur(0px)"
})    
}