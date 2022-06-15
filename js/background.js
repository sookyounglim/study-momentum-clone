const imgPath = "img"
const images = [`${imgPath}/pexels-pixabay-33109.jpg`, `${imgPath}/pexels-pixabay-355321.jpg`, `${imgPath}/pexels-pixabay-532192.jpg`, `${imgPath}/pexels-pixabay-533953.jpg`];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImg = document.createElement("img");

backgroundImg.src = chosenImage;
backgroundImg.alt = "랜덤한 배경화면";
document.body.appendChild(backgroundImg);