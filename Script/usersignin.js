let logo=document.getElementById("logo-image");
logo.addEventListener("click",function(){
    window.location.href="./index.html";
});

let loginbtn=document.getElementById("login");
loginbtn.addEventListener("click",function(e){
    e.preventDefault();
    window.location.href="./userlogin.html";
});

let nameinp=document.getElementById("name");
let emailinp=document.getElementById("email");
let passwordinp=document.getElementById("password");

let okbtn=document.getElementById("done");

let userls=JSON.parse(localStorage.getItem("userdata"))||[];

okbtn.addEventListener("click",function(e){
    e.preventDefault();
    
    if(nameinp.value==""||emailinp.value==""||passwordinp.value==""){
        alert("Please fill the all inputs.");
    }
    else{
        let flag=false;
        for(let i=0;i<userls.length;i++){
            if(userls[i].email==emailinp.value.toLowerCase()){
                flag=true;
                break;
            }
        }
            if(flag===true){
                alert("Hey! You are a existing user,Please login from here.");
                nameinp.value="";
                emailinp.value="";
                passwordinp.value="";
                window.location.href="./userlogin.html";
            }
            else{
let obj={
    name:nameinp.value.toLowerCase(),
    email:emailinp.value.toLowerCase(),
    password:password.value.toLowerCase(),
}
userls.push(obj);
localStorage.setItem("userdata",JSON.stringify(userls));
alert("Welcom new user to our Travasure,I hope you will like our website.");
window.location.href="./usersignin.html";
            }
    }
});


