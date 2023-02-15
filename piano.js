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
    case "d":
      var A0 = new Audio("sounds/A0.mp3");
      A0.play();
      break;
    case "q":
      var A1 = new Audio("sounds/A1.mp3");
      A1.play();
      break;
    case "w":
      var A2 = new Audio("sounds/A2.mp3");
      A2.play();
      break;
    case "e":
      var A3 = new Audio("sounds/A3.mp3");
      A3.play();
      break;
    case "r":
      var A4 = new Audio("sounds/A4.mp3");
      A4.play();
      break;
    case "t":
      var A5 = new Audio("sounds/A5.mp3");
      A5.play();
      break;
    case "a":
      var A6 = new Audio("sounds/A6.mp3");
      A6.play();
      break;
    case "s":
      var A7 = new Audio("sounds/A7.mp3");
      A7.play();
      break;

    case "f":
      var Ab1 = new Audio("sounds/Ab1.mp3");
      Ab1.play();
      break;
    case "g":
      var Ab2 = new Audio("sounds/Ab2.mp3");
      Ab2.play();
      break;
    case "z":
      var Ab3 = new Audio("sounds/Ab3.mp3");
      Ab3.play();
      break;
    case "x":
      var Ab4 = new Audio("sounds/Ab4.mp3");
      Ab4.play();
      break;
    case "c":
      var Ab5 = new Audio("sounds/Ab5.mp3");
      Ab5.play();
      break;
    case "v":
      var Ab6 = new Audio("sounds/Ab6.mp3");
      Ab6.play();
      break;
    case "b":
      var Ab7 = new Audio("sounds/Ab7.mp3");
      Ab7.play();
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
