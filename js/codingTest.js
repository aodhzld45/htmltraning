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