function freeQuote(){
    let userEl=document.getElementById("username");
    let userValue=userEl.value;
    let userPara=document.getElementById("errorUser");
    let userExp=/^[A-Za-z]+$/;
    let userStatus=false;
    let emailEl=document.getElementById("email");
    let emailValue=emailEl.value;
    let emailPara=document.getElementById("errorEmail");

    let emailExp=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailStatus=false;

    let messageEl=document.getElementById("message");
    let messageValue=messageEl.value;

//name validation//

if(userValue === ""){
    userPara.textContent="Please fill the User Name";
    userPara.style.color="Red";
    userStatus=false;
}
else{
    if(userValue.match(userExp) ){
        userPara.textContent="";
        userStatus=true;
    }
    else{
        userPara.style.color="Red";
        userPara.textContent="Please fill only characters";
    }
}
//emailValidation//

if(emailValue === ""){
    emailPara.textContent="Please fill your email";
    emailPara.style.color="Red";
    emailStatus=false;
}
else{
    if(emailValue.match(emailExp) ){
        emailPara.textContent="";
        emailStatus=true;
    }
    else{
        emailPara.style.color="Red";
        emailPara.textContent="Please fill vaild email address";
    }
}



if(userStatus === true && emailStatus === true){
    return true;
}
else{
    return false;
}

}