let logo=document.getElementById("logo-image");
logo.addEventListener("click",function(){
    window.location.href="./index.html";
});

let body=document.querySelector("body");
let emailinp=document.getElementById("email");
let passwordinp=document.getElementById("password");

let okbtn=document.getElementById("login");

let data=[
    {email:"sarita@travasure.com"}, {email:"utkarsh@travasure.com"},
    {email:"himanshu@travasure.com"}, {email:"sankhadip@travasure.com"}, {email:"ranjeet@travasure.com"},
];

okbtn.addEventListener("click",function(e){
    e.preventDefault();
    if(emailinp.value==""||passwordinp.value==""){
            alert("Admin,Please fill the all inputs.");
        }else{
            let flag=false;
for(let i=0;i<data.length;i++){
    if(data[i].email==emailinp.value.toLowerCase() && passwordinp.value=="travasure"){
        flag=true;
        break;
    }
}
if(flag==true){
    alert("Welcome Admin");
    emailinp.value="";
            passwordinp.value="";
           window.location.href="./adminHome.html";
}else{
    let a=true;
    for(let i=0;i<data.length;i++){
        if(data[i].email.toLowerCase()==emailinp.value.toLowerCase() && passwordinp.value!="travasure"){
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
alert("Wrong credential");
}
}
}
});