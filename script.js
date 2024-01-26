function GenQrCode(idTien, idNoidung) {
    let soTien = document.getElementById(idTien).value * 1000;
    let noiDung = document.getElementById(idNoidung).value;
    var qrImg = "https://img.vietqr.io/image/970407-6556999999-print.png?amount="+soTien+"&addInfo="+ noiDung;
    document.getElementById("qr-img").src = qrImg;
    console.log(qrImg);
}
