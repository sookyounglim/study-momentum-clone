function onGeoSuccess(location) {
	const lat = location.coords.latitude;
	const lon = location.coords.longitude;
	const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`;

	fetch(url).then((response) => response.json()).then((response) => {
		const city = document.querySelector(".weather span:first-child");
		const weather = document.querySelector(".weather span:last-child");
		
		city.innerText = `${response.name} /`;
		weather.innerText = response.weather[0].main;
	});
}

function onGeoError() {
	console.log("위치를 확인할 수 없습니다. 접근 권한 등을 확인해주세요.");
}

{
	const weatherDiv = document.querySelector(".weather");
	navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}
