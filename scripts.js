class Color {
  constructor(hex) {
    this.hex = hex
    this.isLocked = false
  };
};

class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.colors = [color1, color2, color3, color4, color5]
    this.id = Date.now()
  };
};

//--------------------GLOBAL VARIABLES--------------------

var randomColor1 = new Color(getRandomHex());
var randomColor2 = new Color(getRandomHex());
var randomColor3 = new Color(getRandomHex());
var randomColor4 = new Color(getRandomHex());
var randomColor5 = new Color(getRandomHex());

var currentPalette;

//--------------------QUERY SELECTORS--------------------

var allSwatches = document.querySelectorAll(".swatches");
// var lockImage = document.querySelector("./assets/lock.jpg");
// var unlockImage = document.querySelector("./assets/unlock.jpg");
//--------------------EVENT LISTENERS--------------------

window.addEventListener("load", function () {
  createNewPalette();
  updateBoxInput();
  addLockListeners();
});

//--------------------DOM--------------------

function updateBoxInput() {
  for (var i = 0; i < 5; i++) {
  allSwatches[i].innerHTML = `
      <div class="color-box" id="${currentPalette.colors[i].hex}" style="background-color:${currentPalette.colors[i].hex}"></div>
      <div class="box-label">
      <p>${currentPalette.colors[i].hex}</p>
      <img src="./assets/unlock.jpg" id="${currentPalette.colors[i].hex}">
      </div>
      `
  };
};

function addLockListeners() {
  for (var i = 0; i < allSwatches.length; i++) {
    allSwatches[i].addEventListener("click", lockSwatch);
  };
};

//--------------------EVENT HANDLERS--------------------

function createNewPalette() {
  return currentPalette = new Palette(randomColor1, randomColor2, randomColor3, randomColor4, randomColor5);
};

function lockSwatch(event) {
console.log(event.target);
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if(currentPalette.colors[i].hex === event.target.id && currentPalette.colors[i].isLocked){
      currentPalette.colors[i].isLocked = false;
  }
    else if(currentPalette.colors[i].hex === event.target.id && !currentPalette.colors[i].isLocked){
      currentPalette.colors[i].isLocked = true;
    };
  };
};

//--------------------MISC FUNCTIONS--------------------

function getRandomHex() {
  var allDigits = "0123456789ABCDEF";
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode = hexCode + allDigits.charAt(Math.floor(Math.random() * 16));
  }
  return hexCode;
};
