let logo=document.getElementById("logo-image");
logo.addEventListener("click",function(){
    window.location.href="./index.html";
});


let signinbtn=document.getElementById("signin");
signinbtn.addEventListener("click",function(e){
    e.preventDefault();
    window.location.href="./usersignin.html";
});

let emailinp=document.getElementById("email");
let passwordinp=document.getElementById("password");

let okbtn=document.getElementById("done");
let userls=JSON.parse(localStorage.getItem("userdata"))||[];
okbtn.addEventListener("click",function(e){
    e.preventDefault();
    if(emailinp.value==""||passwordinp.value==""){
        alert("Please fill the all inputs.");
    }else{
        let flag=false;
 for(let i=0;i<userls.length;i++){
if(userls[i].email==emailinp.value.toLowerCase() && userls[i].password==passwordinp.value.toLowerCase()){
    flag=true;
    break;
}
        }
        if(flag==true){
            alert("login successfully");
            email.value="";
            password.value="";
            window.location.href= "./userlogin.html";
        }else{
            let a=true;
            for(let i=0;i<userls.length;i++){
                if(userls[i].email==emailinp.value.toLowerCase() && userls[i].password!=passwordinp.value.toLowerCase()){
                    a=false;
                    break;
                }
            }
if(a==false){
    passwordinp.value="";
    alert("Hey! you are using wrong password,Please put the correct password");
}else{
    email.value="";
    password.value="";
        alert("Hey! you are a NewUser,I am excited to see you,Please register from here.");
        window.location.href= "./usersignin.html";
}
        }
    }
});