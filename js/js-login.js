var btnLogIn = document.forms['login-box']['btn-log-in'];
btnLogIn.onclick = function () {
    if (validateForm()) {
        doLogin();
    }
};

function doLogin() {
    var _password = document.forms['login-box']['password'].value;
    var _email = document.forms['login-box']['email'].value;

    var logInInformation = {
        password: _password,
        email: _email,
    };

    var sendData = JSON.stringify(logInInformation);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Log In Successfully with ID ' + responseData.token);
            localStorage.setItem('token-key', responseData.token);
            document.forms['login-box'].reset();
            var token = localStorage.getItem('token-key');
            if (token != null || token.length != 0) {
                location.href = 'my-song.html';
            }
        } else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Login fails, please try again! Error: ' + responseData.status);
            if (responseData.error.email != null) {
                var msgEmail = document.forms['login-box']['email'].nextElementSibling;
                msgEmail.classList.add('msg-error');
                msgEmail.innerHTML = responseData.error.email;
                document.forms['login-box']['email'].nextElementSibling.innerHTML = responseData.error.email;
            }
            if (responseData.error.password != null) {
                var msgPassword = document.forms['login-box']['password'].nextElementSibling;
                msgPassword.classList.add('msg-error');
                msgPassword.innerHTML = responseData.error.password;
                document.forms['login-box']['password'].nextElementSibling.innerHTML = responseData.error.password;
            }
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}

function validateForm() {
    var isValid = true;
    var isValidPassword = true;
    var pwdPassword = document.forms['login-box']['password'];
    var msgPassword = pwdPassword.nextElementSibling;
    if (pwdPassword.value == null && pwdPassword.value.length == 0) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password is required!';
        isValidPassword = false;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Valid.';
    }
    isValid = isValidPassword;
    return isValid;
}
