$(document).ready(function(){

$('.submit').click(function(){
    validateForm();
});

function validateForm(){

    var usernameReg = /^[A-Za-z]+$/;
    var passwordReg = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    var username = $('#usernameInput').val();
    var password = $('#passwordInput').val();

     $('.error').hide();

        if(username == ""){
            $('#username').after('<span class="error"> Please enter your username.</span>');
        }
        else if(!usernameReg.test(username)){
            $('#username').after('<span class="error"> Upper a Lowercase letters only.</span>');
        }

        if(password == ""){
            $('#password').after('<span class="error"> Can not submit a blank password. </span>');
        }
        else if(!passReg.test(pass)){
            $('#password').after('<span class="error">Minimum eight characters, at least one letter, one number and one special character</span>');
        }
}

});
