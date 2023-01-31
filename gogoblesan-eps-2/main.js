const target1 = document.getElementById("targetObject1");
const target2 = document.getElementById("targetObject2");
const select = document.getElementById("selection");
const input = document.getElementById("inputValue");

// Ubah latar belakang target1 dan target2 sesuai dengan pilihan selection
// Warna Latar
// Warna Text
// Ukuran Text
// Jenis Font
// Lebar Konten
// Tinggi Konten

function update() {
  // Your code here
  if (select.value === "Warna Latar") {
    target1.style.backgroundColor = input.value;
  } else if (select.value === "Warna Text") {
    target1.style.color = input.value;
  } else if (select.value === "Ukuran Text") {
    target1.style.fontSize = input.value;
  } else if (select.value === "Jenis Font") {
    target1.style.fontFamily = input.value;
  } else if (select.value === "Lebar Konten") {
    target1.style.width = input.value;
  } else if (select.value === "Tinggi Konten") {
    target1.style.height = input.value;
  } else {
    target1.style.backgroundColor = "red";
    target1.style.color = "white";
    target2.innerHTML = "pilih dulu setangg :v";
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
}

// reset
function reset() {
  // Your code here
  window.location.reload();
}
