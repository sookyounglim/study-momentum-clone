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
	const deleteTargetId = deleteTargetLi.id;

	const deleteIdx = toDoStorage.find((currentValue, index, toDoStorage) => (currentValue.id === deleteTargetId ? index : -1));
	toDoStorage.splice(deleteIdx, 1);
	saveToDo();
	deleteTargetLi.remove();
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
		id: new Date(),
		text: newToDo
	};
	toDoStorage.push(newToDoObj);

	toDoText.value = "";
	displayToDo(newToDoObj);
	saveToDo();
}

const savedToDo = localStorage.getItem(TODO_KEY);
if (savedToDo) {
	toDoStorage = JSON.parse(savedToDo);
	toDoStorage.forEach(displayToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);
