var allUsers = [];
var users = localStorage.getItem("users");
var currentUser = localStorage.getItem("currentUser");


if (users !== null) {
    allUsers = JSON.parse(users);
}



function login() {
    var email = document.querySelector("#lemail").value;
    var password = document.querySelector("#lpass").value;
    var filterUser = allUsers.filter(function(data) {
        return data.email == email && data.password == password && data.name
    });
    if (filterUser.length) {
        localStorage.setItem("currentUser", JSON.stringify(filterUser));
        location.href = "../index.html"
    } else {
        alert("Please signup first!");
        location.href = "../signup.html";
    }
}