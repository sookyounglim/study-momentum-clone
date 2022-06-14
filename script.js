const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
	if (loginInput.value === "")
		return ;
	alert(`Hello ${loginInput.value}`);
}

loginButton.addEventListener("click", onLoginBtnClick);