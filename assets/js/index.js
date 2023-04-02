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
    ? ((validationWeight.innerHTML = `<span class="danger">Weight cannot be empty</span>`),
      (validationHeight.innerHTML = `<span class="danger">Height cannot be empty</span>`),
      (output.innerHTML = ``))
    : weight.value.length < 1
    ? ((validationWeight.innerHTML = `<span class="danger">Weight cannot be empty</span>`),
      (validationHeight.innerHTML = ``),
      (output.innerHTML = ``))
    : height.value.length < 1
    ? ((validationHeight.innerHTML = `<span class="danger">Height cannot be empty</span>`),
      (validationWeight.innerHTML = ``),
      (output.innerHTML = ``))
    : weight.value.length > 1 && height.value.length > 1
    ? ((result = (weight.value / (height.value / 100) ** 2).toFixed(1)),
      (bmi =
        result <= 18.5
          ? "Underweight"
          : result > 18.5 && result <= 24.9
          ? "Normal weight"
          : result >= 25 && result <= 29.9
          ? "Overweight "
          : result >= 30 && "Obesity"),
      (output.innerHTML =
        ` Your BMI is <strong> ` +
        result +
        `</strong> which means You are
  <strong>` +
        bmi +
        `</strong>`),
      (weight.value = ""),
      (height.value = ""),
      (validationWeight.innerHTML = ``),
      (validationHeight.innerHTML = ``))
    : ((output.innerHTML = ``),
      (validationWeight.innerHTML = ``),
      (validationHeight.innerHTML = ``));
};
