function SinhVien(ma, ten, matKhau, email, diemToan, diemLy, diemHoa) {
  this.ma = ma;
  this.ten = ten;
  this.matKhau = matKhau;
  this.email = email;
  this.diemToan = diemToan;
  this.diemLy = diemLy;
  this.diemHoa = diemHoa;
  this.tinhDTB = function () {
    return (this.diemToan + this.diemHoa + this.diemLy) / 3;
  };
}
