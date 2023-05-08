let logo=document.getElementById("logo-image" );
logo.addEventListener("click",function(){
    window.location.href="./index.html";
});

let nameinp=document.getElementById("name");
let emailinp=document.getElementById("email");
let passwordinp=document.getElementById("password");
let cpasswordinp=document.getElementById("cpassword");
let phoneinp=document.getElementById("phone");

let okbtn=document.getElementById("done");

let userls=JSON.parse(localStorage.getItem("userdata"))||[];

okbtn.addEventListener("click",function(e){
    e.preventDefault();
    
    if(nameinp.value==""||emailinp.value==""||passwordinp.value==""||cpasswordinp.value==""||phoneinp.value==""){
        alert("Please fill the all inputs.");
    }
    else{
        if(passwordinp.value!=cpasswordinp.value){
            alert("Password doesnot match.");
            passwordinp.value="";
            cpasswordinp.value="";
        }else{
        let flag=false;
        for(let i=0;i<userls.length;i++){
            if(userls[i].email.toLowerCase()==emailinp.value.toLowerCase()){
                flag=true;
                break;
            }
        }
            if(flag===true){
                alert("Hey! You are a existing user,Please login from here.");
                nameinp.value="";
                emailinp.value="";
                passwordinp.value="";
                cpasswordinp.value="";
                phoneinp.value="";
                window.location.href="./userlogin.html";
            }
            else{
let obj={
    name:nameinp.value,
    email:emailinp.value,
    password:passwordinp.value,
    cpassword:cpasswordinp.value,
    phone:phoneinp.value,
    present:false,
}
userls.push(obj);
localStorage.setItem("userdata",JSON.stringify(userls));
nameinp.value="";
emailinp.value="";
passwordinp.value="";
cpasswordinp.value="";
phoneinp.value="";
alert("Welcom new user to our Travasure,I hope you will like our website.");
window.location.href="./userlogin.html";
            }
    }
}
});


