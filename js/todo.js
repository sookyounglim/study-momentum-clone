const TODO_KEY = "todo-list";

const toDoForm = document.querySelector(".todo-form");
const toDoText = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list-display");

let toDoStorage = [];

function saveToDo() {
	window.localStorage.setItem(TODO_KEY, JSON.stringify(toDoStorage));
}

function handleBtnDelete(event) {
	const deleteTargetLi = event.target.parentNode;
	deleteTargetLi.remove();
}

function displayToDo(newToDo) {
	const newLi = document.createElement("li");
	const newSpan = document.createElement("span");

	newSpan.innerText = newToDo;

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
	toDoStorage.push(newToDo);

	toDoText.value = "";
	displayToDo(newToDo);
	saveToDo();
}

const savedToDo = localStorage.getItem(TODO_KEY);
if (savedToDo) {
	toDoStorage = JSON.parse(savedToDo);
	toDoStorage.forEach(displayToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
