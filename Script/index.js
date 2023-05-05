let menu_btn = document.getElementsByClassName("bi-list")[0];
let options = document.getElementById("option")
menu_btn.addEventListener("click",()=>
{
    options.classList.toggle("active")

})




// ================nav Bar=========================//
let icon = document.getElementById("logo")
icon.addEventListener("click",()=>
{
    window.location.href = "./index.html"
})

//===================Product========================//


let all = document.getElementById("all")
 all.addEventListener("click",()=>
 {
    window.location.href = "./Destination.html"
 })