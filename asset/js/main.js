$(document).ready(function () {

    function  kthoTen() {
        let ht = $('#txtht').val();
        let ctht= /^[A-za-z]+$/;
        if(ctht.test(ht)) {
            $('#erht').html("(*)");
            $('#erht').addClass('error');
            return true;
        } else {

            $('#erht').html("(*)khong co ky tu so");
            $('#erht').addClass('error');
            return false;
        }
    }

    function  ktEmail() {
        let email = $('#txtemail').val();
        let ctemail= /^[^\s]+@[^\s]+$/;
        if(ctemail.test(email)) {
            $('#erem').html("(*)");
            $('#erem').addClass('error');
            return true;
        } else {

            $('#erem').html("(*)không đúng cú pháp");
            $('#erem').addClass('error');
            return false;
        }
    }
    function  ktEmail1() {
        let email = $('#txtemail1').val();
        let ctemail= /^[^\s]+@[^\s]+$/;
        if(ctemail.test(email)) {
            $('#erem1').html("(*)");
            $('#erem1').addClass('error');
            return true;
        } else {

            $('#erem1').html("(*)không đúng cú pháp");
            $('#erem1').addClass('error');
            return false;
        }
    }

    function  ktpw() {
        let ps = $('#psmk').val();
        let ctPs = /^.{6,}./;

        if(ctPs.test(ps)) {
            $('#erps').html("(*)");
            $('#erps').addClass('error');
            return true;
        } else {
            $('#erps').html("(*)hon 6 ky tu");
            $('#erps').addClass('error');
            return false;
        }
    }
    
    function  ktpw1() {
        let ps = $('#psmk1').val();
        let ctPs = /^.{6,}./;

        if(ctPs.test(ps)) {
            $('#erps1').html("(*)");
            $('#erps1').addClass('error');
            return true;
        } else {
            $('#erps1').html("(*)hon 6 ky tu");
            $('#erps1').addClass('error');
            return false;
        }
    }

    function ktNgay() {
        let today = new Date();
        let ngay = $('#txtngay').val();
        let checkngay = new Date(ngay);

        if(checkngay > today) {
            $('#erng').html("(*)");
            $('#erng').addClass('error');
            return true;
        } else {
            $('#erng').html("(*)sau ngay hien tai");
            $('#erng').addClass('error');
            return false;
        }
    }

    $('#txtht').blur(function (p) {
        kthoTen();
    })
    $('#txtemail').blur(function (p) {
        ktEmail();
    })
    $('#txtemail1').blur(function (p) {
        ktEmail1();
    })
    $('#psmk').blur(function (p) {
        ktpw();
    })
    $('#psmk1').blur(function (p) {
        ktpw1();
    })
    $('#txtngay').blur(function (p) {
        ktNgay();
    })
});