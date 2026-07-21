let count = 0;
let myButton = document.getElementById("my-Button");
let numberText = document.getElementById(number - text);

myButton.addEventListener("click", function () {
  count = count + 1;
  numberText.innerText = count;
});
