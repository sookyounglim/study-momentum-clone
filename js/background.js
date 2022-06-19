MYAPP.imgPath = "img"
MYAPP.images = [`${MYAPP.imgPath}/pexels-pixabay-33109.jpg`, `${MYAPP.imgPath}/pexels-pixabay-355321.jpg`, `${MYAPP.imgPath}/pexels-pixabay-532192.jpg`, `${MYAPP.imgPath}/pexels-pixabay-533953.jpg`];

{
	const chosenImage = MYAPP.images[Math.floor(Math.random() * MYAPP.images.length)];
	const backgroundImg = document.createElement("img");

	backgroundImg.src = chosenImage;
	backgroundImg.alt = "랜덤한 배경화면";
	document.body.appendChild(backgroundImg);
}