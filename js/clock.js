const clockClass = document.querySelector(".clock");

clockClass.classList.remove("hidden");
clockClass.innerText = "00:00";

function getCurrentClock() {
	const date = new Date();
	const hours = date.getHours().toString().padStart(2, "0");
	const minutes = date.getMinutes().toString().padStart(2, "0");
	const seconds = date.getSeconds().toString().padStart(2, "0");
	clockClass.innerText = (`${hours}:${minutes}:${seconds}`);
}

getCurrentClock();
setInterval(getCurrentClock, 1000);