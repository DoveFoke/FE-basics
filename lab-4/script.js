//Перше завдання
var isFifthChanged = false;
var isSixthChanged = false;
var sixth = document.querySelector("#sixth");

sixth.addEventListener("click", changeColorForSixth);

function changeColorForFifth () {
    var element = document.getElementById("fifth")
    
    if (isFifthChanged) {    
        element.style.backgroundColor = "white";
        element.style.color = "black";
    } else {
        var randomBgColor = generateRandomColor();
        var randomTextColor = generateRandomColor();
    
        element.style.backgroundColor = randomBgColor;
        element.style.color = randomTextColor;
    }

    isFifthChanged = !isFifthChanged;
}

function changeColorForSixth() {

    if (isSixthChanged) {
        sixth.style.backgroundColor = "white";
        sixth.style.color = "black";
    } else {
    var randomBgColor = generateRandomColor();
    var randomTextColor = generateRandomColor();

    sixth.style.backgroundColor = randomBgColor;
    sixth.style.color = randomTextColor;
    }

    isSixthChanged = !isSixthChanged;
}

function generateRandomColor() {
    
    var color = "#";
    var symbols = "0123456789ABCDEF"
    
    for (var i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
}



//Друге завдання:
function addImage() {
    var kyivImage = document.getElementById("kyivImage");
    var kyivImageParent = document.getElementById("kyivImageParent");
    if (kyivImage) {

    } else {
        var newKyivImage = document.createElement("img");
        newKyivImage.src = "./kyiv.jpeg";
        newKyivImage.alt = "Місто Київ";
        newKyivImage.id = "kyivImage";
        kyivImageParent.appendChild(newKyivImage);
    }   
}

function increaseImageSize() {
    var img = document.getElementById("kyivImage");
    var currentWidth = img.width;
    img.style.width = (currentWidth * 1.1) + "px";
}

function decreaseImageSize() {
    var img = document.getElementById("kyivImage");
    var currentWidth = img.width;
    img.style.width = (currentWidth * 0.9) + "px";
}

function removeImage() {
    var img = document.getElementById("kyivImage");
    if (img) {
        img.parentNode.removeChild(img);
    }
}