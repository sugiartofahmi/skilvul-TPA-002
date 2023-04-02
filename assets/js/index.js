const button = document.getElementById("form_button"),
  weight = document.getElementById("input_weigth"),
  height = document.getElementById("input_height"),
  output = document.getElementById("output_text");
let result = "",
  bmi = "";

button.onclick = () => {
  result = (weight.value / (height.value / 100) ** 2).toFixed(1);
  bmi =
    result <= 18.5
      ? "Underweight"
      : result > 18.5 && result <= 24.9
      ? "Normal weight"
      : result >= 25 && result <= 29.9
      ? "Overweight "
      : result >= 30 && "Obesity";
  weight.value.length > 0 && height.value.length != 0
    ? (output.innerHTML =
        ` <p id="output_text">Your BMI is <strong> ` +
        result +
        `</strong> which means You are
  <strong>` +
        bmi +
        `</strong></p>`)
    : (output.innerHTML = `<p class="danger" id="output_text">Input cannot be empty</p>`);
};
