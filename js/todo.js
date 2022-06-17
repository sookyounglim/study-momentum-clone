const TODO_KEY = "todo-list";

const toDoForm = document.querySelector(".todo-form");
const toDoText = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list-display");

let toDoStorage = [];

function saveToDo(toDoStorage) {
	window.localStorage.setItem(TODO_KEY, JSON.stringify(toDoStorage));
}

function handleBtnDelete(event) {
	const deleteLi = event.target.parentNode;

	toDoStorage = toDoStorage.filter((currentValue) => currentValue.id !== parseInt(deleteLi.id));
	saveToDo(toDoStorage);
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
	toDoList.appendChild(newLi);

	newButton.addEventListener("click", handleBtnDelete);
}

function handleToDoSubmit(event) {
	event.preventDefault();

	const newToDo = toDoText.value;
	const newToDoObj = {
		id: Date.now(),
		text: newToDo
	};
	toDoStorage.push(newToDoObj);

	toDoText.value = "";
	displayToDo(newToDoObj);
	saveToDo(toDoStorage);
}

const savedToDo = localStorage.getItem(TODO_KEY);
if (savedToDo) {
	toDoStorage = JSON.parse(savedToDo);
	toDoStorage.forEach(displayToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);