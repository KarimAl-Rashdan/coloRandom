class Color {
  constructor(hex) {
    this.hex = hex
    this.isLocked = false;
  }
}

function randomHex() {
  var allDigits = "0123456789ABCDEF"
  var hexCode = "#"
  for (var i = 0; i < 6; i++) {
    hexCode = hexCode + allDigits.charAt( Math.floor(Math.random() * 16))
  }
return hexCode
}
