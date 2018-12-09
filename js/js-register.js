var btnSubmit = document.forms['register-box']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateData()) {
        saveRegister();
    }
    ;
};

function validateData() {
    var txtFirstName = document.forms['register-box']['firstName'];
    var txtLastName = document.forms['register-box']['lastName'];
    var pwdPassword = document.forms['register-box']['password'];
    var pwdConfirmPassword = document.forms['register-box']['confirmPassword'];
    var txtAddress = document.forms['register-box']['address'];
    var txtPhone = document.forms['register-box']['phone'];
    var txtAvatar = document.forms['register-box']['avatar'];
    var txtGender = document.forms['register-box']['gender'];
    var txtEmail = document.forms['register-box']['email'];
    var txtBirthday = document.forms['register-box']['birthday'];

    var msgFirstName = txtFirstName.nextElementSibling;
    var msgLastName = txtLastName.nextElementSibling;
    var msgPassword = pwdPassword.nextElementSibling;
    var msgConfirmPassword = pwdConfirmPassword.nextElementSibling;
    var msgAddress = txtAddress.nextElementSibling;
    var msgPhone = txtPhone.nextElementSibling;
    var msgAvatar = txtAvatar.nextElementSibling;
    var msgGender = txtGender.nextElementSibling;
    var msgEmail = txtEmail.nextElementSibling;
    var msgBirthday = txtBirthday.nextElementSibling;

    var isValid = true;
    var isValidFirstName = true;
    var isValidLastName = true;
    var isValidPassword = true;
    var isValidConfirmPassword = true;
    var isValidAddress = true;
    var isValidPhone = true;
    var isValidAvatar = true;
    var isValidGender = true;
    var isValidEmail = true;
    var isValidBirthday = true;

    if (txtFirstName.value == null || txtFirstName.value.length == 0) {
        msgFirstName.classList.remove('msg-success');
        msgFirstName.classList.add('msg-error');
        msgFirstName.innerHTML = 'First name can\'t be null or empty.';
        isValidFirstName = false;
    } else {
        msgFirstName.classList.remove('msg-error');
        msgFirstName.classList.add('msg-success');
        msgFirstName.innerHTML = 'Valid.';
    }
    if (txtLastName.value == null || txtLastName.value.length == 0) {
        msgLastName.classList.remove('msg-success');
        msgLastName.classList.add('msg-error');
        msgLastName.innerHTML = 'Last name can\'t be null or empty.';
        isValidLastName = false;
    } else {
        msgLastName.classList.remove('msg-error');
        msgLastName.classList.add('msg-success');
        msgLastName.innerHTML = 'Valid.';
    }
    if (pwdPassword.value == null || pwdPassword.value.length == 0) {
        msgPassword.classList.remove('msg-success');
        msgPassword.classList.add('msg-error');
        msgPassword.innerHTML = 'Password can\'t be null or empty.';
        isValidPassword = false;
    } else {
        msgPassword.classList.remove('msg-error');
        msgPassword.classList.add('msg-success');
        msgPassword.innerHTML = 'Valid.';
    }
    if (pwdConfirmPassword.value == null || pwdConfirmPassword.value.length == 0 || pwdPassword.value != pwdConfirmPassword.value) {
        msgConfirmPassword.classList.remove('msg-success');
        msgConfirmPassword.classList.add('msg-error');
        msgConfirmPassword.innerHTML = 'The confirm password doesn\'t match.';
        isValidConfirmPassword = false;
    } else {
        msgConfirmPassword.classList.remove('msg-error');
        msgConfirmPassword.classList.add('msg-success');
        msgConfirmPassword.innerHTML = 'Valid.';
    }
    if (txtAddress.value == null || txtAddress.value.length == 0) {
        msgAddress.classList.remove('msg-success');
        msgAddress.classList.add('msg-error');
        msgAddress.innerHTML = 'Address can\'t be null or empty.';
        isValidAddress = false;
    } else {
        msgAddress.classList.remove('msg-error');
        msgAddress.classList.add('msg-success');
        msgAddress.innerHTML = 'Valid.';
    }
    if (txtPhone.value == null || txtPhone.value.length == 0) {
        msgPhone.classList.remove('msg-success');
        msgPhone.classList.add('msg-error');
        msgPhone.innerHTML = 'Telephone number can\'t be null or empty.';
        isValidPhone = false;
    } else {
        msgPhone.classList.remove('msg-error');
        msgPhone.classList.add('msg-success');
        msgPhone.innerHTML = 'Valid.';
    }
    if (txtAvatar.value == null || txtAvatar.value.length == 0) {
        msgAvatar.classList.remove('msg-success');
        msgAvatar.classList.add('msg-error');
        msgAvatar.innerHTML = 'Avatar link can\'t be null or empty.';
        isValidAvatar = false;
    } else {
        msgAvatar.classList.remove('msg-error');
        msgAvatar.classList.add('msg-success');
        msgAvatar.innerHTML = 'Valid.';
    }
    if (txtGender.value == 5) {
        msgGender.classList.remove('msg-success');
        msgGender.classList.add('msg-error');
        msgGender.innerHTML = 'Gender can\'t be skipped.';
        isValidGender = false;
    } else {
        msgGender.classList.remove('msg-error');
        msgGender.classList.add('msg-success');
        msgGender.innerHTML = 'Valid.';
    }
    if (txtEmail.value == null || txtEmail.value.length == 0) {
        msgEmail.classList.remove('msg-success');
        msgEmail.classList.add('msg-error');
        msgEmail.innerHTML = 'Email can\'t be null or empty.';
        isValidEmail = false;
    } else {
        msgEmail.classList.remove('msg-error');
        msgEmail.classList.add('msg-success');
        msgEmail.innerHTML = 'Valid.';
    }
    if (txtBirthday.value == null || txtBirthday.value.length == 0) {
        msgBirthday.classList.remove('msg-success');
        msgBirthday.classList.add('msg-error');
        msgBirthday.innerHTML = 'Birthday can\'t be null or empty.';
        isValidBirthday = false;
    } else {
        msgBirthday.classList.remove('msg-error');
        msgBirthday.classList.add('msg-success');
        msgBirthday.innerHTML = 'Valid.';
    }
    isValid = isValidFirstName && isValidLastName && isValidPassword && isValidConfirmPassword &&
        isValidAddress && isValidPhone && isValidAvatar && isValidGender && isValidEmail && isValidBirthday;
    return isValid;
}

function saveRegister() {
    var txtFirstName = document.forms['register-box']['firstName'];
    var txtLastName = document.forms['register-box']['lastName'];
    var pwdPassword = document.forms['register-box']['password'];
    var txtAddress = document.forms['register-box']['address'];
    var txtPhone = document.forms['register-box']['phone'];
    var txtAvatar = document.forms['register-box']['avatar'];
    var txtGender = document.forms['register-box']['gender'];
    var txtEmail = document.forms['register-box']['email'];
    var txtBirthday = document.forms['register-box']['birthday'];
    var txtIntroduction = document.forms['register-box']['introduction'];

    var msgFirstName = txtFirstName.nextElementSibling;
    var msgLastName = txtLastName.nextElementSibling;
    var msgPassword = pwdPassword.nextElementSibling;
    var msgAddress = txtAddress.nextElementSibling;
    var msgPhone = txtPhone.nextElementSibling;
    var msgAvatar = txtAvatar.nextElementSibling;
    var msgGender = txtGender.nextElementSibling;
    var msgEmail = txtEmail.nextElementSibling;
    var msgBirthday = txtBirthday.nextElementSibling;

    var registerInformation = {
        firstName: txtFirstName.value,
        lastName: txtLastName.value,
        password: pwdPassword.value,
        address: txtAddress.value,
        phone: txtPhone.value,
        avatar: txtAvatar.value,
        gender: txtGender.value,
        email: txtEmail.value,
        birthday: txtBirthday.value,
        introduction: txtIntroduction.value
    };
    var sendData = JSON.stringify(registerInformation);

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Register success with ID ' + responseData.id);
            document.forms['register-box'].reset();
            location.href = 'login.html';
        } else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Register unsuccessfully. Please register again! Error No. ' + responseData.status);
            if (responseData.error.firstName != null) {
                msgFirstName.classList.remove('msg-success');
                msgFirstName.classList.add('msg-error');
                msgFirstName.innerHTML = responseData.error.firstName;
            }
            if (responseData.error.lastName != null) {
                msgLastName.classList.remove('msg-success');
                msgLastName.classList.add('msg-error');
                msgLastName.innerHTML = responseData.error.lastName;
            }
            if (responseData.error.password != null) {
                msgPassword.classList.remove('msg-success');
                msgPassword.classList.add('msg-error');
                msgPassword.innerHTML = responseData.error.password;
            }
            if (responseData.error.address != null) {
                msgAddress.classList.remove('msg-success');
                msgAddress.classList.add('msg-error');
                msgAddress.innerHTML = responseData.error.address;
            }
            if (responseData.error.phone != null) {
                msgPhone.classList.remove('msg-success');
                msgPhone.classList.add('msg-error');
                msgPhone.innerHTML = responseData.error.phone;
            }
            if (responseData.error.avatar != null) {
                msgAvatar.classList.remove('msg-success');
                msgAvatar.classList.add('msg-error');
                msgAvatar.innerHTML = responseData.error.avatar;
            }
            if (responseData.error.gender != null) {
                msgGender.classList.remove('msg-success');
                msgGender.classList.add('msg-error');
                msgGender.innerHTML = responseData.error.gender;
            }
            if (responseData.error.email != null) {
                msgEmail.classList.remove('msg-success');
                msgEmail.classList.add('msg-error');
                msgEmail.innerHTML = responseData.error.email;
            }
            if (responseData.error.birthday != null) {
                msgBirthday.classList.remove('msg-success');
                msgBirthday.classList.add('msg-error');
                msgBirthday.innerHTML = responseData.error.birthday;
            }
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/members', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(sendData);
}