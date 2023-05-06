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

// ========================slides======================//

let head = document.querySelector("header")
let img = new Image()
let imageLinks = ["Imgs/Slides/1464188297_I2GZl5w7lL-1920x1080.jpg.jpg",
"Imgs/Slides/1553066319_panchgani_places_feature.jpg.jpg",
"Imgs/Slides/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
"Imgs/Slides/m_activities_surat_ubharat_umbharat_beach_l_360_640.avif",
"Imgs/Slides/202664.jpg",
"Imgs/Slides/pti10032022000206b-1-1157070-1666864723.jpg",
"Imgs/Slides/morning-rainy-photography-architecture-reflection.jpg",
"Imgs/Slides/Thar_Khuri.jpg"
]

let currentIndex = 0;
head.style.backgroundImage = `url('${imageLinks[currentIndex]}')`;
setInterval(() => {
  currentIndex = (currentIndex + 1) % imageLinks.length;
  head.style.backgroundImage = `url('${imageLinks[currentIndex]}')`;
}, 3000);