class Color {
  constructor(hex) {
    this.hex = hex
    this.isLocked = false
  };
};

class Palette {
  constructor(color1, color2, color3, color4, color5) {
    this.color1 = color1
    this.color2 = color2
    this.color3 = color3
    this.color4 = color4
    this.color5 = color5
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

// var allRandomColors = [randomColor1, randomColor2, etc]

// function that checks if (!randomColor1.isLocked) --> new Color} else
//

//--------------------QUERY SELECTORS--------------------

// var allColorBoxes = document.querySelectorAll(".box-input");
var colorBox1 = document.querySelector(".box-container1");
var colorBox2 = document.querySelector(".box-container2");
var colorBox3 = document.querySelector(".box-container3");
var colorBox4 = document.querySelector(".box-container4");
var colorBox5 = document.querySelector(".box-container5");

//--------------------EVENT LISTENERS--------------------

window.addEventListener("load", function () {
  createNewPalette();
  updateBoxInput();
});



//--------------------DOM--------------------


function updateBoxInput() {

  article.innerHTML +=
      `
      <div class="color-box" data-box-color=${hexCode}></div>
      <p>${hexCode}</p>
      <img src=./assets/lock.jpg>
      `
    };
};

//


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










//page load querySelector

// var color1 = getRandomHex()
// x 5

//new palette


//update DOM from new instance of palette
          //document.querySelectorAll(".box-input")
          //for loop which iterates through node list of boxes for each:
            //
