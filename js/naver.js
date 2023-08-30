
//1
//var cnum_btn = document.querySelector("#cnum_btn");

// 회원가입 버튼
signup_btn.onclick = signUp;
// 인증번호 발급 버튼
//cnum_btn.onclick = auth_btn;

//회원가입 버튼 
function signUp() {
    document.querySelector("#signup_btn");
    alert("회원가입 버튼 클릭");

    chkPwd()
}

//인증번호 발급 부분 6자리 무작위 문자열
function authCodeE() {
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'
    const stringLength = 6;
    let authCode = '';

    for(let i = 0; i< stringLength; i++){
        const rnum = Math.floor(Math.random() * chars.length);
        authCode += chars.substring(rnum, rnum + 1);
    }
    console.log(authCode);
    return authCode;
}

//휴대폰 번호 유효성 검증
function chkPhone(authCode) {
    //입력된 휴대폰 input id : signup_phone 값 가져오기.value
    var phone = document.querySelector("#signup_phone").value;

    //휴대폰 번호 정규식
    /*
        1. 01로 시작하며 세 번째 자리는 0 또는 1,6,7,8,9
        2. 번호 사이의 대시(-)는 사용하든 안 하든 상관없음
        3. 가운데 전화번호는 3, 4 자리의 0에서 9까지 숫자가 되어야 함.
        4. 마지막 번호는 4자리로 0에서 9까지 숫자가 되어야 함.
    */ 
    var regPhone= /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

    if (regPhone.test(phone) == true) {
      
        alert("휴대폰 형식입니다.");
        alert("인증번호는 : " + authCodeE(authCode)  + "입니다.");
    }else{
        alert("휴대폰 형식이 아닙니다.");
        return false;
    }
}

//비밀번호 유효성 검증
function chkPwd() {
    //사용자가 입력한 패스워드값 가져오기
    var signup_pw = document.querySelector("#signup_pw").value;
    var pwchk = document.getElementById('signup_pwchk');
    var signup_pwchk = document.getElementById('signup_pwchk').value;
    //InnerHTML 얘시 check 변수.
    var check = document.getElementById('check');

    //비밀번호 확인 검증
    //(signup_pwchk !== signup_pw) ? alert("불일치") : alert("일치");
   
    /* 
        setCustomValidity() 메서드 
        요소에 대한 사용자 정의 유효성 메시지를 설정
    */ 

    if (signup_pwchk !== signup_pw) {
        pwchk.setCustomValidity('비밀번호가 일치 하지 않습니다.');
        //check.innerHTML='비밀번호가 일치 하지 않습니다.';
        //check.style.color = 'red';
    }else {
        pwchk.setCustomValidity('비밀번호가 일치합니다');
        // check.innerHTML='비밀번호가 일치합니다';
        // check.style.color = 'blue';
    }

    /* 1. 숫자와 문자 포함 형태의 6~12자리 이내의 암호 정규식 (1 가지 조합) */
    // var regPwd = /^[A-Za-z0-9]{6,12}$/;

    /* 2.영문, 숫자, 특수문자 중 2가지 이상 조합하여 10자리 이내의 암호 정규식 ( 2 가지 조합) */
    //var regPwd = /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,12}$/;

    /* 3. 특수문자 / 문자 / 숫자 포함 형태의 8~15자리 이내의 암호 정규식 ( 3 가지 조합) */
    var regPwd = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

    if (regPwd.test(signup_pw) == true) {
        alert('사용할 수 있는 비밀번호 입니다.');
    }else{
        alert('8~15자리의 특수문자 / 문자 / 숫자를 포함해야합니다. ');
        return false;
    }

    //signup_pw == signup_pwchk ? alert("일치") : alert("불일치");

}

