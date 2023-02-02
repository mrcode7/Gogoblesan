// panggil element id

const targetObject = document.getElementById("targetObject");
const inputHexa = document.getElementById("inputHexa");

function ubahLatar() {
  targetObject.style.backgroundColor = inputHexa.value;
}
