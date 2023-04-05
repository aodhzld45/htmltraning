var text = document.querySelector("#text");

text.onclick = function() {
    var reply = confirm("색을 변경하시겠습니까?");
    console.log(reply);

    if (reply ? text.style.color = 'blue' :  false);
    
    // if (reply === true) {
    //     text.color.style = 'blue';
    // }else {
    //     false;
    // }

}

var numtest = document.querySelector("#numtest");

numtest.onclick = function () {
    var onreply = prompt("숫자를 입력하세요.");

    if (onreply !== null) {
        if (onreply % 2 === 0 || onreply % 3 === 0) {
            alert("2 혹은 3의 배수입니다.");
        }else {
            alert("2 혹은 3의 배수가 아닙니다.");
        }
        // if (onreply % 2 === 0 && onreply % 3 === 0) 
    }
    else {
        alert("입력이 취소됐습니다");
    }
}

var h1class = document.querySelector(".h1class");
