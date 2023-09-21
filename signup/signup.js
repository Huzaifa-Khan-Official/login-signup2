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
    var singleData = {
        name : name,
        email : email,
        password : password
    }

    allUsers.push(singleData);
    localStorage.setItem("users", JSON.stringify(allUsers));
    document.querySelector("#sname").value = "";
    document.querySelector("#semail").value = "";
    document.querySelector("#spass").value = "";
    location.href = "../login/login.html";
}