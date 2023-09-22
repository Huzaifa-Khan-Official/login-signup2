var allUsers = [];
var users = localStorage.getItem("users");
var currentUser = localStorage.getItem("currentUser");


if (users !== null) {
    allUsers = JSON.parse(users);
}

function signup() {
    var name = document.querySelector("#sname").value;
    var email = document.querySelector("#semail").value;
    var password = document.querySelector("#spass").value;
    var errorPara = document.querySelector("#errorPara");

    if (name == "" && email == "" && password == "") {
        errorPara.innerHTML = "Please fill all the inputs!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (name == "") {
        errorPara.innerHTML = "Please fill the name input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (email == "") {
        errorPara.innerHTML = "Please fill the email input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else if (password == "") {
        errorPara.innerHTML = "Please fill the password input!";
        setTimeout(() => {
            errorPara.innerHTML = "";
        }, 4000);
    } else {

        var singleData = {
            name: name,
            email: email,
            password: password
        }

        allUsers.push(singleData);
        localStorage.setItem("users", JSON.stringify(allUsers));
        document.querySelector("#sname").value = "";
        document.querySelector("#semail").value = "";
        document.querySelector("#spass").value = "";
        location.href = "../login/login.html";
    }
}