const loginForm = document.querySelector(".login-form");

function onSubmitLoginForm(event) {
	event.preventDefault();
	const username = loginForm.querySelector("input").value;
	alert(`Hello ${username}`);
}

loginForm.addEventListener("submit", onSubmitLoginForm);
