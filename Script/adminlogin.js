let logo=document.getElementById("logo-image");
logo.addEventListener("click",function(){
    window.location.href="./index.html";
});

let body=document.querySelector("body");
let emailinp=document.getElementById("email");
let passwordinp=document.getElementById("password");

let okbtn=document.getElementById("login");

okbtn.addEventListener("click",function(e){
    e.preventDefault();
    if(emailinp.value==""||passwordinp.value==""){
        alert("Admin,Please fill the all inputs.");
    }else if(emailinp.value.toLowerCase()=="admin@travasure.com" && passwordinp.value.toLowerCase()=="travasure"){
       alert("Welcome Admin");
       window.location.href="./adminHome.html";
    }else if(emailinp.value.toLowerCase()!="admin@travasure.com"&&passwordinp.value.toLowerCase()=="travasure"){
    alert("Wrong EmailId,Please put correct emailid");
    emailinp.value="";
    }else if(emailinp.value.toLowerCase()=="admin@travasure.com"&&passwordinp.value.toLowerCase()!="travasure"){
        alert("Wrong password,Please put correct password");
        passwordinp.value="";
        }
        else{
            alert("Wrong Credential");
            passwordinp.value="";
            emailinp.value="";
        }
})