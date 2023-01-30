// panggil element id

const targetObject = document.getElementById("targetObject");
const inputColor = document.getElementById("inputHexa");
const alert = document.getElementById("alert");
const alertCard = document.getElementById("alert-card");

// fungsi ubah warna

function ubahLatar() {
  const color = inputColor.value;

  //   jika inputan kosong
  if (color == "") {
    alertCard.style.display = "block";
    alertCard.style.backgroundColor = "red";
    alertCard.style.color = "white";
    alert.innerHTML = "Inputan tidak boleh kosong";

    // refresh page
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }
  //   jika inputan tidak sesuai
  //   else if (color != colorList) {
  //     alertCard.style.display = "block";
  //     alertCard.style.backgroundColor = "red";
  //     alertCard.style.color = "white";
  //     alert.innerHTML = "Warna tidak tersedia";
  // refresh page
  // setTimeout(function () {
  //   window.location.reload();
  // }, 2000);
  else {
    alertCard.style.display = "blok";
    alertCard.style.backgroundColor = "green";
    alertCard.style.color = "white";
    alert.innerHTML = "Warna berhasil diubah";
    targetObject.style.backgroundColor = color;
    // setTimeout(function () {
    //   alertCard.style.display = "blok";
    // }, 2000);
  }
}
