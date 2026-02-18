document.getElementById("login")
    .addEventListener("click", function () {
  const number = document.getElementById("number").value;
  const pass = document.getElementById("pass").value;
  if (number === "01234567890" && pass === "1234") {
    alert("Access granted");
    window.location.assign("home.html");
  } else {
    alert("Login Failed.Try Again");
  }
});


