function validateEmail(){
    var email = document.getElementsByClassName("email-address")[0];
    var emailAddress = email.value;
    var message= document.getElementById("error-message");
    var errorIcon = document.getElementsByClassName("error")[0];
    
    if(emailAddress == ""){
        message.innerHTML="Please enter your email";
        errorIcon.classList.add("error-active");
        email.classList.add("email-address-error");
    }
    else{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailAddress.match(validRegex)){
        message.innerHTML="";
        errorIcon.classList.remove("error-active");
        email.classList.remove("email-address-error");
    }
    else{
        message.innerHTML="Please provide a valid email";
        errorIcon.classList.add("error-active");
        email.classList.add("email-address-error");
    }
}
}