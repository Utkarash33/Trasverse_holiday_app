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
let head = document.getElementById("slides");
let head2 = document.getElementById("slides2");
head.style.position = "absolute";
head2.style.position = "absolute";
head.style.zIndex = -35;
head2.style.zIndex = -33;
let img = new Image();
let imageLinks = [
  "Imgs/Slides/1464188297_I2GZl5w7lL-1920x1080.jpg.jpg",
  "Imgs/Slides/1553066319_panchgani_places_feature.jpg.jpg",
  "Imgs/Slides/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
  "Imgs/Slides/202664.jpg",
  "Imgs/Slides/Thar_Khuri.jpg",
  "Imgs/Slides/pti10032022000206b-1-1157070-1666864723.jpg",
  "Imgs/Slides/morning-rainy-photography-architecture-reflection.jpg"
];
let currentIndex = 0;
let currentImage = new Image();
currentImage.src = imageLinks[currentIndex];
head.appendChild(currentImage);

setInterval(() => {
  currentIndex = (currentIndex + 1) % imageLinks.length;
  let nextImage = new Image();
  nextImage.src = imageLinks[currentIndex];
  nextImage.style.opacity = 0;
  nextImage.style.position = 'absolute';
  nextImage.style.top = 0;
  nextImage.style.left = 0;
  nextImage.style.transition = 'opacity 1s ease-in-out';
  if (head.style.zIndex == -33) {
    head.style.zIndex = -35;
    head2.style.zIndex = -33;
    head2.innerHTML = null;
    head2.appendChild(nextImage);
  } else {
    head.style.zIndex = -33;
    head2.style.zIndex = -35;
    head.innerHTML = null;
    head.appendChild(nextImage);
  }
  setTimeout(() => {
    currentImage = nextImage;
    currentImage.style.opacity = 1;
  }, 50);
}, 5000);



// let head = document.querySelector("header")
// let img = new Image()
// let imageLinks = ["Imgs/Slides/1464188297_I2GZl5w7lL-1920x1080.jpg.jpg",
// "Imgs/Slides/1553066319_panchgani_places_feature.jpg.jpg",
// "Imgs/Slides/GettyImages-1008831236-5c65d6bf4cedfd00014aa310.jpg",
// "Imgs/Slides/202664.jpg",
// "Imgs/Slides/Thar_Khuri.jpg",
// "Imgs/Slides/pti10032022000206b-1-1157070-1666864723.jpg",
// "Imgs/Slides/morning-rainy-photography-architecture-reflection.jpg"
// ]

// let currentIndex = 0;
// head.style.backgroundImage = `url('${imageLinks[currentIndex]}')`;
// setInterval(() => {
//   head.style.backgroundImage = null
//   currentIndex = (currentIndex + 1) % imageLinks.length;
//   head.style.backgroundImage = `url('${imageLinks[currentIndex]}')`;
// }, 3000);



// ==============================Login=======================================//

let Login  = document.getElementById("LoginText")

let data=JSON.parse(localStorage.getItem("userdata"))||[];
let x= false;
  data.forEach((elm)=>
  {
    console.log(elm.present)
    if(elm.present==true)
    {
      x= true;
    }
  })
  if(x==false)
  {
    Login.innerText="Resister"
  }
  else
  {
    Login.innerText = "Log Out"
  }
Login.addEventListener("click",()=>
{ 
  if(Login.innerText == "Resister")
    {
    window.location.href="./userlogin.html"
    }
     else if(Login.innerText == "Log Out")
    { 
     data.forEach((elm)=>
     {
      elm.present= false;
     })
      localStorage.setItem("userdata",JSON.stringify(data))
      Login.innerText = "Resister"
    }
})
 let myBooking = document.getElementById("mybookings")
 myBooking.addEventListener("click",()=>
 {
  if(Login.innerText == "Log Out")
  {
    window.location.href ="./mybookings.html"
  }
  
  else
  {
    alert("User has to Login")
    window.location.href = "./userlogin.html"
  }
 })