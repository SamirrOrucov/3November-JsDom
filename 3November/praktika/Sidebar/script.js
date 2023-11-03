const btn=document.querySelector("button")
const nav=document.querySelector(".nav-container")
const x=document.querySelector(".xicon")
const active=document.querySelector(".active")

btn.addEventListener("click",function () {
    // nav.style.visibility="visible"

    nav.style.transform="translate(0px, 0px)"
    btn.style.display="none"

})
x.addEventListener("click",function () {
    nav.style.width="0px"
    btn.style.display="block"

})