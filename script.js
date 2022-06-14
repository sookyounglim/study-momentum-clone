const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector(".login-form");
const greeting = document.querySelector(".greeting");


function onSubmitLoginForm(event) {
	const username = document.querySelector(".login-form input").value;

	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello! My friend, ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);

	localStorage.setItem(USERNAME_KEY, username);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if (saveUsername === null) {
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onSubmitLoginForm);
} else {
	loginForm.classList.add(HIDDEN_CLASSNAME);
	greeting.classList.remove(HIDDEN_CLASSNAME);
	greeting.innerText = `Hello! My friend, ${username}`;
}
