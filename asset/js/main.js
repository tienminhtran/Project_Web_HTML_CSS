// $(document).ready(function () {

//     function  kthoTen() {
//         let ht = $('#txtht').val();
//         let ctht= /^[A-za-z]+/;
//         if(ctht.test(ht)) {
//             $('#erht').html("(*)");
//             $('#erht').addClass('error');
//             return true;
//         } else {
//             $('#erht').html("(*)khong co ky tu so");
//             $('#erht').addClass('error');
//             return false;
//         }
//     }

//     function  ktEmail() {
//         let email = $('#txtemail').val();
//         let ctemail= /^[^\s]+@[^\s]+$/;
//         if(ctemail.test(email)) {
//             $('#erem').html("(*)");
//             $('#erem').addClass('error');
//             return true;
//         } else {
//             $('#erem').html("(*)không đúng cú pháp");
//             $('#erem').addClass('error');
//             return false;
//         }
//     }
//     function  ktEmail1() {
//         let email = $('#txtemail1').val();
//         let ctemail= /^[^\s]+@[^\s]+$/;
//         if(ctemail.test(email)) {
//             $('#erem1').html("(*)");
//             $('#erem1').addClass('error');
//             return true;
//         } else {

//             $('#erem1').html("(*)không đúng cú pháp");
//             $('#erem1').addClass('error');
//             return false;
//         }
//     }

//     function  ktpw() {
//         let ps = $('#psmk').val();
//         let ctPs = /^.{6,}./;

//         if(ctPs.test(ps)) {
//             $('#erps').html("(*)");
//             $('#erps').addClass('error');
//             return true;
//         } else {
//             $('#erps').html("(*)hon 6 ky tu");
//             $('#erps').addClass('error');
//             return false;
//         }
//     }

//     function  ktpw1() {
//         let ps = $('#psmk1').val();
//         let ctPs = /^.{6,}./;

//         if(ctPs.test(ps)) {
//             $('#erps1').html("(*)");
//             $('#erps1').addClass('error');
//             return true;
//         } else {
//             $('#erps1').html("(*)hon 6 ky tu");
//             $('#erps1').addClass('error');
//             return false;
//         }
//     }

//     function ktNgay() {
//         let today = new Date();
//         let ngay = $('#txtngay').val();
//         let checkngay = new Date(ngay);

//         if(checkngay < today) {
//             $('#erng').html("(*)");
//             $('#erng').addClass('error');
//             return true;
//         } else {
//             $('#erng').html("(*)truoc ngay hien tai");
//             $('#erng').addClass('error');
//             return false;
//         }
//     }

//     $('#txtht').blur(function (p) {
//         kthoTen();
//     })
//     $('#txtemail').blur(function (p) {
//         ktEmail();
//     })
//     $('#txtemail1').blur(function (p) {
//         ktEmail1();
//     })
//     $('#psmk').blur(function (p) {
//         ktpw();
//     })
//     $('#psmk1').blur(function (p) {
//         ktpw1();
//     })
//     $('#txtngay').blur(function (p) {
//         ktNgay();
//     })
// });
function validateInput() {
    const inputField1 = document.getElementById("txtht");
    const inputValue1 = inputField1.value;
    const regex1 = /^[a-zA-Z ]+$/;
    const errorMessage1 = document.getElementById("erht");
    if (!regex1.test(inputValue1)) {
        errorMessage1.innerHTML = "Vui lòng nhập đúng định dạng: Họ tên không có số, ký tự đặc biệt";
        errorMessage1.style.color = "red";
    } else {
        errorMessage1.innerHTML = "(*)";
    }



    const inputField2 = document.getElementById("txtemail");
    const inputValue2 = inputField2.value;
    const regex2 = /[\w+\.*]+@gmail\.[com|vn]+/;
    const errorMessage2 = document.getElementById("erem");
    if (!regex2.test(inputValue2)) {
        errorMessage2.innerHTML = "Vui lòng nhập đúng định dạng mail: exagm@gmail.com";
        errorMessage2.style.color = "red";
    } else {
        errorMessage2.innerHTML = "(*)";
    }
    // mật khẩu
    const inputField3 = document.getElementById("psmk");
    const inputValue3 = inputField1.value;
    const regex3 = /[\w[!@#$%^&*]{6,}/;
    const errorMessage3 = document.getElementById("erps");
    if (!regex3.test(inputValue2)) {
        errorMessage3.innerHTML = "Vui lòng nhập đúng định dạng mật khẩu: gồm 6 ký tự";
        errorMessage3.style.color = "red";
    } else {
        errorMessage3.innerHTML = "(*)";
    }

    //---------------------NGÀY 
    const inputField4 = document.getElementById("txtngay");
    const inputValue4 = inputField4.value;
    const errorMessage4 = document.getElementById("erng");

    const inputDate = new Date(inputValue4);
    const currentDate = new Date();

    let isValid = true;

    if (isNaN(inputDate)) {
        errorMessage4.innerHTML = "Ngày sinh không hợp lệ";
        errorMessage4.style.color = "red";
        isValid = false;
    } else if (inputDate > currentDate) {
        errorMessage4.innerHTML = "Ngày sinh phải trước ngày hiện tại";
        errorMessage4.style.color = "red";
        isValid = false;
    } else {
        errorMessage4.innerHTML = "(*)";
    }
    return regex1.test(inputValue1) && regex2.test(inputValue2) && regex3.test(inputValue3) && isValid;
}
const form = document.getElementById();
form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateInput()) {
        window.location.href = '/BaiTapLonWeb/Home_page.html';
    }
});

// const LonginButton = document.querySelector('btn-signup');
// if (LonginButton) {
//     LonginButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         if (validateInput()) {
//             window.location.href = '/BaiTapLonWeb/Feature_page.html';
//         }
//     });
// }