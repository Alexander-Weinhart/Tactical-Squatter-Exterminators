var emailField = document.getElementById('email-field');
var emailError = document.getElementById('error-email');

function validateEmail(){
    if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = ('Please use a valid email');
        return false;
    }else{
        emailError.innerHTML = ("");
        return true;
    };
};