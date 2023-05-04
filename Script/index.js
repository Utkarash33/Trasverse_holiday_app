let menu_btn = document.getElementsByClassName("bi-list")[0];
let options = document.getElementById("option")
menu_btn.addEventListener("click",()=>
{
    options.classList.toggle("active")

})
