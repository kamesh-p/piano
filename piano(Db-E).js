var keyLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < keyLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var activeKey = document.querySelector("." + currentKey);
    makeSound(activeKey);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
function makeSound(key) {
  switch (key) {
    case "q":
      var C1 = new Audio("sounds/G1.mp3");
      C1.play();
      break;
    case "w":
      var C2 = new Audio("sounds/G2.mp3");
      C2.play();
      break;
    case "e":
      var C3 = new Audio("sounds/G3.mp3");
      C3.play();
      break;
    case "r":
      var C4 = new Audio("sounds/G4.mp3");
      C4.play();
      break;
    case "t":
      var C5 = new Audio("sounds/G5.mp3");
      C5.play();
      break;
    case "y":
      var C6 = new Audio("sounds/G6.mp3");
      C6.play();
      break;
    case "u":
      var C7 = new Audio("sounds/G7.mp3");
      C7.play();
      break;
    case "a":
      var D1 = new Audio("sounds/Gb1.mp3");
      D1.play();
      break;
    case "s":
      var D2 = new Audio("sounds/Gb2.mp3");
      D2.play();
      break;
    case "d":
      var D3 = new Audio("sounds/Gb3.mp3");
      D3.play();
      break;
    case "f":
      var D4 = new Audio("sounds/Gb4.mp3");
      D4.play();
      break;
    case "g":
      var D5 = new Audio("sounds/Gb5.mp3");
      D5.play();
      break;
    case "h":
      var D6 = new Audio("sounds/Gb6.mp3");
      D6.play();
      break;
    case "j":
      var D7 = new Audio("sounds/Gb7.mp3");
      D7.play();
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
