const authShell = document.getElementById("authShell");
const showRegisterButton = document.getElementById("showRegister");
const showLoginButton = document.getElementById("showLogin");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");

function showRegister() {
  authShell.classList.add("register-mode");
  loginMessage.textContent = "";
  registerMessage.textContent = "";
}

function showLogin() {
  authShell.classList.remove("register-mode");
  loginMessage.textContent = "";
  registerMessage.textContent = "";
}

showRegisterButton.addEventListener("click", showRegister);
showLoginButton.addEventListener("click", showLogin);

loginForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!loginForm.reportValidity()) return;
  loginMessage.textContent = "Login form submitted (demo).";
});

registerForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!registerForm.reportValidity()) return;
  registerMessage.textContent = "Account form submitted (demo).";
});
