var keyLength = document.querySelectorAll(".drum").length;

for (let i = 0; i < keyLength; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
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
      var C1 = new Audio("sounds/C1.mp3");
      C1.play();
      break;
    case "w":
      var C2 = new Audio("sounds/C2.mp3");
      C2.play();
      break;
    case "e":
      var C3 = new Audio("sounds/C3.mp3");
      C3.play();
      break;
    case "r":
      var C4 = new Audio("sounds/C4.mp3");
      C4.play();
      break;
    case "t":
      var C5 = new Audio("sounds/C5.mp3");
      C5.play();
      break;
    case "a":
      var C6 = new Audio("sounds/C6.mp3");
      C6.play();
      break;
    case "s":
      var C7 = new Audio("sounds/C7.mp3");
      C7.play();
      break;
    case "d":
      var C8 = new Audio("sounds/C8.mp3");
      C8.play();
      break;
    case "f":
      var D1 = new Audio("sounds/D1.mp3");
      D1.play();
      break;
    case "g":
      var D2 = new Audio("sounds/D2.mp3");
      D2.play();
      break;
    case "z":
      var D3 = new Audio("sounds/D3.mp3");
      D3.play();
      break;
    case "x":
      var D4 = new Audio("sounds/D4.mp3");
      D4.play();
      break;
    case "c":
      var D5 = new Audio("sounds/D5.mp3");
      D5.play();
      break;
    case "v":
      var D6 = new Audio("sounds/D6.mp3");
      D6.play();
      break;
    case "b":
      var D7 = new Audio("sounds/D7.mp3");
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
