const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector(".login-form");

function displayGreetings(username) {
	const greeting = document.querySelector(".greeting");

	greeting.innerText = `Hello! My friend, ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

function onSubmitLoginForm(event) {
	event.preventDefault();
	loginForm.classList.add(HIDDEN_CLASSNAME);

	const username = document.querySelector(".login-form input").value;
	displayGreetings(username);
	localStorage.setItem(USERNAME_KEY, username);
}

{
	const saveUsername = localStorage.getItem(USERNAME_KEY);

	if (saveUsername === null) {
		loginForm.classList.remove(HIDDEN_CLASSNAME);
		loginForm.addEventListener("submit", onSubmitLoginForm);
	} else {
		displayGreetings(saveUsername);
	}
}
