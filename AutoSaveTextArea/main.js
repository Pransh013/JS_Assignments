let textArea = document.querySelector("#textarea");

let textValue = localStorage.getItem("textValue");

if (!textValue) {
  textArea.addEventListener("input", () => {
    localStorage.setItem("textValue", textArea.value);
  });
} else {
  textArea.value = textValue;
}
