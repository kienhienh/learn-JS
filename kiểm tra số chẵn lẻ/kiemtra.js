function kiemTra() {
  const so = parseInt(document.getElementById("soNhap").value);
  const ketQua = document.getElementById("ketQua");

  if (isNaN(so)) {
    ketQua.textContent = "Đây không phải là số";
    return;
  }

  ketQua.textContent = so % 2 === 0 ? so + " là số chẵn" : so + " là số lẻ";
}

