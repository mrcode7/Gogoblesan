const targetObject1 = document.getElementById("targetObject1");
const targetObject2 = document.getElementById("targetObject2");
const selection = document.getElementById("selection");
const inputValue = document.getElementById("inputValue");

// Ubah latar belakang target1 dan target2 sesuai dengan pilihan selection
// Warna Latar
// Warna Text
// Ukuran Text
// Jenis Font
// Lebar Konten
// Tinggi Konten

function update() {
  const selectUser = selection.options.selectedIndex;

  switch (selectUser) {
    case 1:
      targetObject1.style.backgroundColor = inputValue.value;
      break;
    case 2:
      targetObject1.style.color = inputValue.value;
      break;
    case 3:
      targetObject1.style.fontSize = inputValue.value + "px";
      break;
    case 4:
      targetObject1.style.fontFamily = inputValue.value;
      break;
    case 5:
      targetObject1.style.width = inputValue.value + "px";
      break;
    case 6:
      targetObject1.style.height = inputValue.value + "px";
      break;

    default:
      break;
  }
}
