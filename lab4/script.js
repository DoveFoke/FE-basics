let clickedElements = new Set();
let n = 3;

document.body.addEventListener("click", function (event) {
	n++; 
	let target;

	if (n % 10 === 0) {
		 target = document.querySelector(":scope *");
	} else {
		 let elements = document.querySelectorAll(".intro");
		 target = elements[n % 10]; 
	}

	if (target) {
		 if (clickedElements.has(target)) {
			  target.style.backgroundColor = "";
			  target.style.color = "";
			  clickedElements.delete(target);
		 } else {
			  target.style.backgroundColor = "lightblue";
			  target.style.color = "red";
			  clickedElements.add(target);
		 }
	}
});

var image = document.querySelector("img");
var addButton = document.getElementById("add-image");
var increaseButton = document.getElementById("increase-size");
var decreaseButton = document.getElementById("decrease-size");
var deleteButton = document.getElementById("delete-image");

addButton.addEventListener("click", function () {
	var newImage = document.createElement("img");
	newImage.src = document.getElementById("image").src = "https://kpi.ua/files/images-page/kyiv.jpg";
	newImage.alt = "Опис нового зображення";
})

increaseButton.addEventListener("click", function () {
	let currentSize = getComputedStyle(image).width;
	let newSize = (parseFloat(currentSize) + 10) + "px";
	image.style.width = newSize;
});

decreaseButton.addEventListener("click", function () {
	let currentSize = getComputedStyle(image).width;
	let newSize = (parseFloat(currentSize) - 10) + "px";
	image.style.width = newSize;
});

deleteButton.addEventListener("click", function () {
	document.getElementById("image").src = "";
});