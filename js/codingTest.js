// function solution(n) {
//     let answer = 0;
   
//     for(let i=0; i<=n; i+=2){
//         if (i % 2 === 0) {
//             answer += i;
//         }
//     }
//     return answer;
// }

// document.write(solution(10))

function solution(n, arr1, arr2) {
    const map1 = arr1.map(binaryString);
    const map2 = arr2.map(binaryString);
    
    const finalMap = [];
    
    for (let i = 0; i < n; i++) {
      let row = '';
      for (let j = 0; j < n; j++) {
        if (map1[i][j] === '1' || map2[i][j] === '1') {
          row += '#';
        } else {
          row += ' ';
        }
      }
      finalMap.push(row);
    }
    
    return finalMap;
  }
  
  // 10진수를 2진수 문자열로 변환하는 함수
  function binaryString(decimal) {
    let binaryString = decimal.toString(2);
    // 문자열의 길이가 n보다 작을 경우 앞에 0을 채움
    while (binaryString.length < n) {
      binaryString = '0' + binaryString;
    }
    return binaryString;
  }


  // https://velog.io/@simchodi/Git-%EC%B4%88%EA%B8%B0%EC%84%B8%ED%8C%85-%EA%B8%B0%EB%B3%B8%EB%AA%85%EB%A0%81%EC%96%B4