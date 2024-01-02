function submit() {
  console.log("yes");
  //   lấy thông tin
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var loai = document.getElementById("loaiSV").value;
  var toan = document.getElementById("txtDiemToan").value * 1;
  var van = document.getElementById("txtDiemVan").value * 1;
  //   console.log({ ma, ten, loai, toan, van });
  //   tạo object
  var sv = {
    ma: ma,
    ten: ten,
    loai: loai,
    toan: toan,
    van: van,
    tinhDTB: function () {
      var dtb = (this.toan + this.van) / 2;
      return dtb;
    },
    xepLoai: function () {
      var dtb = this.tinhDTB();
      if (dtb >= 5) {
        return "Đạt";
      } else {
        return "Không đạt";
      }
    },
  };
  //   hiển thị kết quả
  document.getElementById("spanTenSV").innerText = sv.ten;
  document.getElementById("spanMaSV").innerText = sv.ma;
  document.getElementById("spanLoaiSV").innerText = sv.loai;
  document.getElementById("spanDTB").innerText = sv.tinhDTB();
  document.getElementById("spanXepLoai").innerText = sv.xepLoai();
}
