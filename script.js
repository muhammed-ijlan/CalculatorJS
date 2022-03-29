var display = document.querySelector(".current-operand");

const buttons = Array.from(document.querySelectorAll("button"));
// const deleteButton = document.querySelector(".del-button");
// const allClearButton = document.querySelector(".all-clear");
// const equalsButton = document.querySelector(".equals");
// const operationButtons = document.querySelectorAll(".operation");

buttons.forEach((button) => {
  button.addEventListener("click", function (e) {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "";
        break;
      case "DEL":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch (e) {
          display.innerText = "Error";
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
