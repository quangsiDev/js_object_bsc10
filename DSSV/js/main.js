// sv ~ object
//  dssv ~ array chứa các object

// localStorage ~  vùng nhớ giúp lưu thông tin (JSON), sẽ không bị mất khi user load trang
// localStorage.setItem(key,valueJson) => lưu xuống
// localStorage.getItem(key) => lấy lên
// JSON.stringtify ~ data gốc => data json
// JSON.parse  ~ data json => data gốc
var dssv = [];
// lấy data từ localStorage => render lên layout
var dataJson = localStorage.getItem("DSSV");
var arraySv = JSON.parse(dataJson);
// tạo class SinhVien

// duyệt mảng => convert object => object từ class
for (var i = 0; i < arraySv.length; i++) {
  var data = arraySv[i];
  var sv = new SinhVien(
    arraySv[i].ma,
    arraySv[i].ten,
    arraySv[i].matKhau,
    arraySv[i].email,
    arraySv[i].diemToan,
    arraySv[i].diemLy,
    arraySv[i].diemHoa
  );
  dssv.push(sv);
}
renderDSSV();

function themSv() {
  // lấy data từ form
  var sv = layThongTinTuForm();
  // validate data trước khi thêm
  var isValid = true;
  // update isValid
  // isValid = kiemTraRong(sv.ma, "spanMaSV") & kiemTraTrung(sv.ma, dssv, "spanMaSV");
  // cùng 1 input &&
  //  nối các input &
  // validate ma sv
  isValid = kiemTraRong(sv.ma, "spanMaSV") && kiemTraTrung(sv.ma, dssv, "spanMaSV");
  // validate email sv
  isValid = isValid & (kiemTraRong(sv.email, "spanEmailSV") && kiemTraEmail(sv.email));
  // validate ten sv
  isValid &= kiemTraRong(sv.ten, "spanTenSV");

  if (isValid) {
    dssv.push(sv);
    // giữ lại data khi user load trang
    var dataJson = JSON.stringify(dssv);
    localStorage.setItem("DSSV", dataJson);
    //   render lại layout sau khi thêm thành công
    renderDSSV();
  }
}
function xoaSv(id) {
  // splice(viTriCanXoa,soLuongCanXoa)
  //   từ id tìm ra index
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  dssv.splice(index, 1); // xoá phần tử tại vị trí index trong array dssv
  //   render lại layout sau khi xoá thành công
  renderDSSV();
}

function suaSv(id) {
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == id) {
      index = i;
    }
  }
  // từ index => lấy ra sv được click
  var sv = dssv[index];
  // show thông tin lên form
  document.getElementById("txtMaSV").value = sv.ma;
  document.getElementById("txtTenSV").value = sv.ten;
  document.getElementById("txtPass").value = sv.matKhau;
  document.getElementById("txtEmail").value = sv.email;
  document.getElementById("txtDiemToan").value = sv.diemToan;
  document.getElementById("txtDiemLy").value = sv.diemLy;
  document.getElementById("txtDiemHoa").value = sv.diemHoa;
}
function capNhatSv() {
  var sv = layThongTinTuForm();
  var index;
  for (var i = 0; i < dssv.length; i++) {
    if (dssv[i].ma == sv.ma) {
      index = i;
    }
  }
  // cập nhật data tại vị trí index
  dssv[index] = sv;
  renderDSSV();
}
