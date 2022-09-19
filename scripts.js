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
};

//--------------------GLOBAL VARIABLES--------------------

var randomColor1 = new Color(getRandomHex());
var randomColor2 = new Color(getRandomHex());
var randomColor3 = new Color(getRandomHex());
var randomColor4 = new Color(getRandomHex());
var randomColor5 = new Color(getRandomHex());

var randomColors = [randomColor1, randomColor2, randomColor3, randomColor4, randomColor5];

var savedPalettes = [];

//--------------------QUERY SELECTORS--------------------

var allSwatches = document.querySelectorAll(".swatches");
var allLocks;

var newPaletteButton = document.querySelector(".new-palette-button")
var savePaletteButton = document.querySelector(".save-palette-button")
var asideContainer = document.querySelector(".saved-palettes")

//--------------------EVENT LISTENERS--------------------

window.addEventListener("load", updateSwatches);

newPaletteButton.addEventListener("click", displayNewPalette);
savePaletteButton.addEventListener("click", savePalette);
asideContainer.addEventListener("click", deletePalette);

for (var i = 0; i < allSwatches.length; i++) {
  allSwatches[i].addEventListener("click", lockSwatch);
};

//--------------------DOM HANDLERS--------------------

function updateSwatches() {
  for (var i = 0; i < 5; i++) {
  allSwatches[i].innerHTML = `
      <div class="color-box" style="background-color:${randomColors[i].hex}" data-color-instance="randomColors[${i}]"></div>
      <div class="box-label">
      <p>${randomColors[i].hex}</p>
      <img src="./assets/unlock.jpg" id="${randomColors[i].hex}">
      </div>
      `
  };
  allLocks = document.querySelectorAll("div.box-label > img");
  for (var i = 0; i < allLocks.length; i++) {
    if (randomColors[i].isLocked) {
      allLocks[i].src = "./assets/lock.jpg";
    } else {
      allLocks[i].src = "./assets/unlock.jpg";
    };
  };
};

function displayNewPalette() {
  createNewRandomColors();
  updateSwatches();
};

function changeLockImg(index, num) {
  if (num) {
    allLocks[index].src = "./assets/lock.jpg";
  } else {
    allLocks[index].src = "./assets/unlock.jpg";
  };
};

function showSavedPalettes() {
  asideContainer.innerHTML = ""
  for(var i = 0; i < savedPalettes.length; i++) {
    asideContainer.innerHTML += `
      <div class="palette-details">
        <div class="mini-palette" style="background-color:${savedPalettes[i].colors[0].hex}"></div>
        <div class="mini-palette" style="background-color:${savedPalettes[i].colors[1].hex}"></div>
        <div class="mini-palette" style="background-color:${savedPalettes[i].colors[2].hex}"></div>
        <div class="mini-palette" style="background-color:${savedPalettes[i].colors[3].hex}"></div>
        <div class="mini-palette" style="background-color:${savedPalettes[i].colors[4].hex}"></div>
        <img class="trash-can" src="./assets/trash-can-icon.jpeg" id="${savedPalettes[i].id}">
      </div>
      `
    };
};

//--------------------DATA HANDLERS--------------------

function lockSwatch(event) {
var targetInstance = eval(event.target.dataset.colorInstance);
  for (var i = 0; i < randomColors.length; i++) {
    if(randomColors[i] === targetInstance && targetInstance.isLocked){
      targetInstance.isLocked = false;
      changeLockImg(i, 0)
  } else if(randomColors[i] === targetInstance && !targetInstance.isLocked){
      targetInstance.isLocked = true;
      changeLockImg(i, 1)
    };
  };
};

function createNewRandomColors() {
  for (var i = 0; i < randomColors.length; i++) {
    if (!randomColors[i].isLocked) {
      randomColors[i] = new Color(getRandomHex())
    };
  };
};

function savePalette() {
  var newPalette = new Palette(randomColors[0], randomColors[1],
    randomColors[2], randomColors[3], randomColors[4]);
  savedPalettes.push(newPalette);
  showSavedPalettes()
  displayNewPalette();
};

function deletePalette(event) {
  for (var i = 0; i < savedPalettes.length; i++){
    if(eval(event.target.id) === savedPalettes[i].id){
    savedPalettes.splice(i, 1);
    };
  };
  showSavedPalettes();
};

//--------------------MISC FUNCTIONS--------------------

function getRandomHex() {
  var allDigits = "0123456789ABCDEF";
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode += allDigits.charAt(Math.floor(Math.random() * 16));
  }
  return hexCode;
};