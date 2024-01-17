const buttons = document.querySelectorAll("button");
const input = document.getElementById('input');

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.value += btn.value;
  });
});
