herejavascript
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  window.append = function (value) {
    display.value += value;
  };

  window.clearDisplay = function () {
    display.value = "";
  };

  window.calculate = function () {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  };
});
