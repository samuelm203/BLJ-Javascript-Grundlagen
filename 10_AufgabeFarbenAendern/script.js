const bgPicker = document.getElementById("bg-picker");
const fontPicker = document.getElementById("font-picker");

function updateColors() {
    const selectedBackgroundColor = bgPicker.value;
    const selectedColor = fontPicker.value;

    document.body.style.backgroundColor = selectedBackgroundColor;
    document.body.style.color = selectedColor;
}

bgPicker.addEventListener("input", updateColors);
fontPicker.addEventListener("input", updateColors);