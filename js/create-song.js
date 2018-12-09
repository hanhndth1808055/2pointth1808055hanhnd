var token = localStorage.getItem('token-key');
if (token == null || token.length == 0) {
    alert('Please log in to create song!');
    location.href = 'login.html';
}

var btnSubmit = document.forms['create-song']['btnSubmit'];
btnSubmit.onclick = function () {
    if (validateForm()) {
        saveSong();
    }
};

function validateForm() {
    var isValid = true;
    var isValidName = true;
    var isValidSinger = true;
    var isValidAuthor = true;
    var isValidThumbnail = true;
    var isValidLink = true;

    var txtName = document.forms['create-song']['name'];
    var txtSinger = document.forms['create-song']['singer'];
    var txtAuthor = document.forms['create-song']['author'];
    var txtThumbnail = document.forms['create-song']['thumbnail'];
    var txtLink = document.forms['create-song']['link'];

    var msgName = txtName.nextElementSibling;
    if (txtName.value == null || txtName.value.length == 0) {
        msgName.classList.remove('msg-success');
        msgName.classList.add('msg-error');
        msgName.innerHTML = 'Song name can\'t be null or empty.';
        isValidName = false;
    } else {
        msgName.classList.remove('msg-error');
        msgName.classList.add('msg-success');
        msgName.innerHTML = 'Valid.';
    }
    var msgSinger = txtSinger.nextElementSibling;
    if (txtSinger.value == null || txtSinger.value.length == 0) {
        msgSinger.classList.remove('msg-success');
        msgSinger.classList.add('msg-error');
        msgSinger.innerHTML = 'Singer name can\'t be null or empty.';
        isValidSinger = false;
    } else {
        msgSinger.classList.remove('msg-error');
        msgSinger.classList.add('msg-success');
        msgSinger.innerHTML = 'Valid.';
    }
    var msgAuthor = txtAuthor.nextElementSibling;
    if (txtAuthor.value == null || txtAuthor.value.length == 0) {
        msgAuthor.classList.remove('msg-success');
        msgAuthor.classList.add('msg-error');
        msgAuthor.innerHTML = 'Author name can\'t be null or empty.';
        isValidAuthor = false;
    } else {
        msgAuthor.classList.remove('msg-error');
        msgAuthor.classList.add('msg-success');
        msgAuthor.innerHTML = 'Valid.';
    }
    var msgThumbnail = txtThumbnail.nextElementSibling;
    if (txtThumbnail.value == null || txtThumbnail.value.length == 0) {
        msgThumbnail.classList.remove('msg-success');
        msgThumbnail.classList.add('msg-error');
        msgThumbnail.innerHTML = 'Thumbnail link can\'t be null or empty.';
        isValidThumbnail = false;
    } else {
        msgThumbnail.classList.remove('msg-error');
        msgThumbnail.classList.add('msg-success');
        msgThumbnail.innerHTML = 'Valid.';
    }
    var msgLink = txtLink.nextElementSibling;
    if (txtLink.value == null || txtLink.value.length == 0) {
        msgLink.classList.remove('msg-success');
        msgLink.classList.add('msg-error');
        msgLink.innerHTML = 'Song link can\'t be null or empty.';
        isValidLink = false;
    } else {
        msgLink.classList.remove('msg-error');
        msgLink.classList.add('msg-success');
        msgLink.innerHTML = 'Valid.';
    }
    isValid = isValidName && isValidSinger && isValidAuthor && isValidThumbnail && isValidLink;
    return isValid;
}

function saveSong() {
    var txtName = document.forms['create-song']['name'];
    var txtSinger = document.forms['create-song']['singer'];
    var txtAuthor = document.forms['create-song']['author'];
    var txtThumbnail = document.forms['create-song']['thumbnail'];
    var txtLink = document.forms['create-song']['link'];

    var msgName = txtName.nextElementSibling;
    var msgSinger = txtSinger.nextElementSibling;
    var msgAuthor = txtAuthor.nextElementSibling;
    var msgThumbnail = txtThumbnail.nextElementSibling;
    var msgLink = txtLink.nextElementSibling;

    var song = {
        name: txtName.value,
        singer: txtSinger.value,
        author: txtAuthor.value,
        thumbnail: txtThumbnail.value,
        link: txtLink.value
    };

    var sendData = JSON.stringify(song);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 201) {
            var responseData =JSON.parse(xhr.responseText);
            alert('Save successfully with ID ' + responseData.id);
            document.forms['create-song'].reset();
        } else if (xhr.readyState == 4) {
            var responseData = JSON.parse(xhr.responseText);
            alert('Save song unsuccessfully, please try again! Error: ' + responseData.status);
            if (responseData.error.name != null) {
                msgName.classList.add('msg-error');
                msgName.innerHTML = responseData.error.name;
            }
            if (responseData.error.singer != null) {
                msgSinger.classList.add('msg-error');
                msgSinger.innerHTML = responseData.error.singer;
            }
            if (responseData.error.author != null) {
                msgAuthor.classList.add('msg-error');
                msgAuthor.innerHTML = responseData.error.author;
            }
            if (responseData.error.thumbnail != null) {
                msgThumbnail.classList.add('msg-error');
                msgThumbnail.innerHTML = responseData.error.thumbnail;
            }
            if (responseData.error.link != null) {
                msgLink.classList.add('msg-error');
                msgLink.innerHTML = responseData.error.link;
            }
        }
    };
    xhr.open('POST', 'https://2-dot-backup-server-002.appspot.com/_api/v2/songs', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader('Authorization', 'Basic ' + token);
    xhr.send(sendData);
}
