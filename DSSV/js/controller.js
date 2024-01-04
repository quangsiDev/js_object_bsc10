function renderDSSV() {
  //   hiển thị: tạo ra 1 chuỗi chứa các thẻ tr => innertHTML chuỗi đó vào thẻ tbody
  var contentHTML = "";
  for (var i = 0; i < dssv.length; i++) {
    var data = dssv[i];
    var trString = ` <tr>
                        <td>${data.ma}</td>
                        <td>${data.ten}</td>
                        <td>${data.email}</td>
                        <td>${data.tinhDTB().toFixed(2)}</td>
                        <td>
                        <button
                        onclick="xoaSv('${data.ma}')"
                        class='btn btn-danger'>Delete</button>
                        <button
                        onclick="suaSv('${data.ma}')"
                        class='btn btn-warning'>Edit</button>
                        </td>
                    </tr>`;
    contentHTML = contentHTML + trString;
  }
  document.getElementById("tbodySinhVien").innerHTML = contentHTML;
}

function layThongTinTuForm() {
  var ma = document.getElementById("txtMaSV").value;
  var ten = document.getElementById("txtTenSV").value;
  var matKhau = document.getElementById("txtPass").value;
  var email = document.getElementById("txtEmail").value;
  var diemToan = document.getElementById("txtDiemToan").value * 1;
  var diemLy = document.getElementById("txtDiemLy").value * 1;
  var diemHoa = document.getElementById("txtDiemHoa").value * 1;
  //   tạo object
  var sv = {
    ma: ma,
    ten: ten,
    matKhau: matKhau,
    email: email,
    diemToan: diemToan,
    diemLy: diemLy,
    diemHoa: diemHoa,
    tinhDTB: function () {
      return (this.diemToan + this.diemHoa + this.diemLy) / 3;
    },
  };
  return sv;
}
