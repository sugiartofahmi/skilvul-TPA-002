const button = document.getElementById("form_button"),
  weight = document.getElementById("input_weight"),
  height = document.getElementById("input_height"),
  output = document.getElementById("output_text"),
  validationWeight = document.getElementById("validation_weight"),
  validationHeight = document.getElementById("validation_height");
let result = "",
  bmi = "";

button.onclick = () => {
  weight.value.length < 1 && height.value.length < 1
    ? ((validationWeight.style.visibility = `visible`),
      (validationHeight.style.visibility = `visible`),
      (output.innerHTML = ``))
    : weight.value.length < 1
    ? ((validationWeight.style.visibility = `visible`),
      (validationHeight.style.visibility = `hidden`),
      (output.innerHTML = ``))
    : height.value.length < 1
    ? ((validationHeight.style.visibility = `visible`),
      (validationWeight.style.visibility = `hidden`),
      (output.innerHTML = ``))
    : weight.value.length > 1 &&
      height.value.length > 1 &&
      ((result = (weight.value / (height.value / 100) ** 2).toFixed(1)),
      (bmi =
        result <= 18.5
          ? "Underweight"
          : result > 18.5 && result <= 24.9
          ? "Normal weight"
          : result >= 25 && result <= 29.9
          ? "Overweight "
          : result >= 30 && "Obesity"),
      (output.innerHTML = ` Your BMI is <strong> 
        ${result}</strong> which means You are
  <strong>${bmi}</strong>`),
      (weight.value = ""),
      (height.value = ""),
      (validationWeight.style.visibility = `hidden`),
      (validationHeight.style.visibility = `hidden`));
};
