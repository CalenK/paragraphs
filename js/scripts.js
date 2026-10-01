onload = function() {
  let body = document.body;
  let lightButton = document.querySelector("button#light-mode");
  lightButton.onclick = function() {
   body.style.backgroundColor = "white";
   body.style.color = "black";
  };
  let darkButton = document.querySelector("button#dark-mode");
  darkButton.onclick = function() {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  };
  let defaultButton = document.querySelector("button#default");
  defaultButton.onclick = function() {
    body.style.fontSize = "16px";
  };
  let increasedButton = document.querySelector("button#increase");
  increasedButton.onclick = function() {
    body.style.fontSize = "32px";
  };
};