let logo=document.getElementById("logo-image");
logo.addEventListener("click",function(){
    window.location.href="./index.html";
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
if(userls[i].email.toLowerCase()==emailinp.value.toLowerCase() && userls[i].password.toLowerCase()==passwordinp.value.toLowerCase()){
    flag=true;
    userls[i].present=true;
    break;
}
        }
        if(flag==true){
            alert("login successfully");
            email.value="";
            password.value="";
            localStorage.setItem("userdata",JSON.stringify(userls));
            window.location.href= "./index.html";
        }else{
            let a=true;
            for(let i=0;i<userls.length;i++){
                if(userls[i].email.toLowerCase()==emailinp.value.toLowerCase() && userls[i].password.toLowerCase()!=passwordinp.value.toLowerCase()){
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