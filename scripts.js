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

//--------------------EVENT LISTENERS--------------------

window.addEventListener("load", function () {
  createNewPalette();
  updateBoxInput();
});

//--------------------DOM--------------------

function updateBoxInput() {
  for (var i = 0; i < 5; i++) {
  allSwatches[i].innerHTML = `
      <div class="color-box" style="background-color:${currentPalette.colors[i].hex}"></div>
      <p>${currentPalette.colors[i].hex}</p>
      <img src="./assets/lock.jpg" id="${currentPalette.colors[i].hex}">
      `
  };
};

//--------------------EVENT HANDLERS--------------------

function createNewPalette() {
  return currentPalette = new Palette(randomColor1, randomColor2, randomColor3, randomColor4, randomColor5);
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