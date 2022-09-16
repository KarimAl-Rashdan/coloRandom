class Color {
  constructor(hex) {
    this.hex = hex
    this.isLocked = false
  };
};

class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.colors = [color1, color2, color3, color4, color5];
    this.id = Date.now();
  };

  updatePalette() {
    for (var i = 0; i < this.colors.length; i++) {
      this.colors[i] = randomColors[i];
    };
  };
};

//--------------------GLOBAL VARIABLES--------------------

var randomColor1 = new Color(getRandomHex());
var randomColor2 = new Color(getRandomHex());
var randomColor3 = new Color(getRandomHex());
var randomColor4 = new Color(getRandomHex());
var randomColor5 = new Color(getRandomHex());

var randomColors = [randomColor1, randomColor2, randomColor3, randomColor4, randomColor5];

var currentPalette;

//--------------------QUERY SELECTORS--------------------

var allSwatches = document.querySelectorAll(".swatches");
var newPaletteButton = document.querySelector(".new-palette-button")

var allLocks;

//--------------------EVENT LISTENERS--------------------

window.addEventListener("load", function () {
  createNewPalette();
  updateBoxInput();
  addLockListeners();
});

newPaletteButton.addEventListener("click", function () {
  createNewRandomColors();
  currentPalette.updatePalette();
  updateBoxInput();
});

//--------------------DOM--------------------

function updateBoxInput() {
  for (var i = 0; i < 5; i++) {
  allSwatches[i].innerHTML = `
      <div class="color-box" style="background-color:${currentPalette.colors[i].hex}" data-color-instance="currentPalette.colors[${i}]"></div>
      <div class="box-label">
      <p>${currentPalette.colors[i].hex}</p>
      <img src="./assets/unlock.jpg" id="${currentPalette.colors[i].hex}">
      </div>
      `
  };
  allLocks = document.querySelectorAll("div.box-label > img");
  for (var i = 0; i < allLocks.length; i++) {
    if (currentPalette.colors[i].isLocked) {
      allLocks[i].src = "./assets/lock.jpg";
    } else {
      allLocks[i].src = "./assets/unlock.jpg";
    };
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
var targetInstance = eval(event.target.dataset.colorInstance);
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if(currentPalette.colors[i] === targetInstance && targetInstance.isLocked){
      targetInstance.isLocked = false;
      randomColors[i].isLocked = false;
      allLocks[i].src = "./assets/unlock.jpg";
  } else if(currentPalette.colors[i] === targetInstance && !targetInstance.isLocked){
      targetInstance.isLocked = true;
      randomColors[i].isLocked = true;
      allLocks[i].src = "./assets/lock.jpg";
    };
  };
};

function createNewRandomColors() {
  for (var i = 0; i < currentPalette.colors.length; i++) {
    if (!currentPalette.colors[i].isLocked) {
      randomColors[i] = new Color(getRandomHex())
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
