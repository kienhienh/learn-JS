function tinhdiem() {
      // Lấy điểm từ các ô nhập
      const toan = parseFloat(document.getElementById("toan").value);
      const van = parseFloat(document.getElementById("van").value);
      const anh = parseFloat(document.getElementById("anh").value);
      const ly = parseFloat(document.getElementById("ly").value);
      const hoa = parseFloat(document.getElementById("hoa").value);
      const ketQua = document.getElementById("ketQua");
      if ([toan, van, anh, ly, hoa].some(isNaN)) {
        ketQua.textContent = "Vui lòng nhập đầy đủ điểm các môn.";
        return;
      }
      const diemTB = ((toan + van + anh + ly + hoa) / 5).toFixed(2);
      let xepLoai = "";
      if (diemTB >= 8) {
        xepLoai = "Giỏi";
      } else if (diemTB >= 6.5) {
        xepLoai = "Khá";
      } else if (diemTB >= 5) {
        xepLoai = "Trung bình";
      } else {
        xepLoai = "Yếu";
      }
      ketQua.textContent = `Điểm trung bình: ${diemTB} - Xếp loại: ${xepLoai}`;
    }