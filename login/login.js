const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");

btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    var users = JSON.parse(localStorage.getItem('users')) || [];
    users.sort(function(a, b) {
      // Compare the 2 dates
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    var id = 1;
    if (users.length > 0) {
      id = users[users.length-1].id + 1
    }
    const user = {
      id: id,
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    users.push(user);
    let json = JSON.stringify(users);
    localStorage.setItem(inputUsernameRegister.value, json);
    localStorage.setItem("users", json);
    alert("Đăng Ký Thành Công");
  }
});


const inputUsername = document.querySelector(".input-login-username");
const inputPassword = document.querySelector(".input-login-password");
const btnLogin = document.querySelector(".login__signInButton");

btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("vui lòng không để trống");
  } else {
    const users = JSON.parse(localStorage.getItem("users"));
    let user = users.find((u) => u.username === inputUsername.value && u.password === inputPassword.value)
    if (
      user
    ) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Đăng Nhập Thành Công");
      window.location.href = "/home/index.html";
    } 
    else if(user.username !== inputUsername.value && user.password !== inputPassword.value) {
      alert("Đăng Nhập Thất Bại");
    } 
  }
});

