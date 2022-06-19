MYAPP.loginForm = document.querySelector(".login-form");
MYAPP.initialHiddenClasses = document.querySelectorAll(`.${HIDDEN_CLASSNAME}`);

function displayGreetings(username) {
	const greeting = document.querySelector(".greeting");

	greeting.innerText = `Hello! My friend, ${username}`;
	console.log(MYAPP.initialHiddenClasses);
	MYAPP.initialHiddenClasses.forEach((currentValue) => (currentValue.classList.remove(HIDDEN_CLASSNAME)));
}

function onSubmitLoginForm(event) {
	event.preventDefault();
	MYAPP.loginForm.classList.add(HIDDEN_CLASSNAME);

	const username = document.querySelector(".login-form input").value;
	displayGreetings(username);
	localStorage.setItem(USERNAME_KEY, username);
}

(function() {
	const saveUsername = localStorage.getItem(USERNAME_KEY);

	if (saveUsername === null) {
		MYAPP.loginForm.classList.remove(HIDDEN_CLASSNAME);
		MYAPP.loginForm.addEventListener("submit", onSubmitLoginForm);
	} else
		displayGreetings(saveUsername);
}());
