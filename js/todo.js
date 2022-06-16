const toDoForm = document.querySelector(".todo-form");
const toDoText = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list-display");

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

	toDoText.value = "";
	displayToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
