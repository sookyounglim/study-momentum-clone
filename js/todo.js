MYAPP.toDoForm = document.querySelector(".todo-form");
MYAPP.toDoList = document.querySelector(".todo-list-display");
MYAPP.toDoStorage = [];

function saveToDo(toDoStorage) {
	window.localStorage.setItem(TODO_KEY, JSON.stringify(toDoStorage));
}

function handleBtnDelete(event) {
	const deleteLi = event.target.parentNode;

	MYAPP.toDoStorage = MYAPP.toDoStorage.filter((currentValue) => currentValue.id !== parseInt(deleteLi.id));
	saveToDo(MYAPP.toDoStorage);
	deleteLi.remove();
}

function displayToDo(newToDoObj) {
	const newLi = document.createElement("li");
	const newSpan = document.createElement("span");

	newLi.id = newToDoObj.id;
	newSpan.innerText = newToDoObj.text;

	const newButton = document.createElement("button");
	newButton.innerText = "❌";

	newLi.appendChild(newSpan);
	newLi.appendChild(newButton);
	MYAPP.toDoList.appendChild(newLi);

	newButton.addEventListener("click", handleBtnDelete);
}

function handleToDoSubmit(event) {
	event.preventDefault();

	const toDoText = MYAPP.toDoForm.querySelector("input");
	const newToDo = toDoText.value;
	const newToDoObj = {
		id: Date.now(),
		text: newToDo
	};
	MYAPP.toDoStorage.push(newToDoObj);

	toDoText.value = "";
	displayToDo(newToDoObj);
	saveToDo(MYAPP.toDoStorage);
}

{
	const savedToDo = localStorage.getItem(TODO_KEY);

	if (savedToDo) {
		MYAPP.toDoStorage = JSON.parse(savedToDo);
		MYAPP.toDoStorage.forEach(displayToDo);
	}
	MYAPP.toDoForm.addEventListener("submit", handleToDoSubmit);
}