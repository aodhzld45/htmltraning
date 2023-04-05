var session = document.querySelector("#session");

session.onclick = function() {
    var selector = prompt("관심 세션을 선택해주세요. 1-마케팅, 2-개발, 3-디자인");

    switch (selector) {
        case "1": document.write("<p>마케팅 세션은<b>201호에서</b>   </p>")
        break;

        case "2": document.write("<p>개발 세션은<b>202호에서</b>   </p>")
        break;

        case "3": document.write("<p>디자인 세션은<b>203호에서</b>   </p>")
        break;
    
        default:
            alert("잘못 입력하셨습니다.");
            break;
    }
    
}

//월을 입력받아 계절을 출력
var season = document.querySelector("#season");
season.onclick = function() {
    var month = prompt("월을 입력하세요.");

    switch (month) {
        
            case "1": document.write("<p><b>/b></p>")
            break;

            default: alert("잘못 입력하셨습니다.");
            break;
        }
}

