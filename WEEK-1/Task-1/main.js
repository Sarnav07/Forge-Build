const input = document.getElementById("inputNumber");
const submit = document.getElementById("submitButton");
const display = document.getElementById("displayValue");


submit.onclick = function() {
  display.textContent = input.value;
};


