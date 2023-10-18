// function solution(a, b, n) {
//   var answer = [];
//   function getCoke(a, b, n) {
//     if (n >= a) {
//       answer.push((Math.floor(n / a)) * b); //받은거 
//       return getCoke(a,b,(Math.floor(n / a)) * b + n % a); //n자리에 받은거+남은거
//     }
//   }
//   getCoke(a,b,n);

//   return answer;
// }

function solution(a, b, n) {
  var answer = 0;
  function getCoke(a, b, n) {
    if (n >= a) {
      answer += (Math.floor(n / a)) * b; //받은거 
      return getCoke(a,b,(Math.floor(n / a)) * b + n % a); //n자리에 받은거+남은거
    }
  }
  getCoke(a,b,n);
  return answer;
}



// function solution(a, b, bottles) {
//   let total = 0;

//   while (bottles >= a) {
//       let recycle = Math.floor(bottles / a) * b;
//       total += recycle;
//       bottles = (bottles % a) + recycle;
//   }

//   return total;
// }


// // 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 리턴한다
//   // 콜라를 받기 위해 빈 병 a개를 가져다 주면 마트는 주는 콜라 b 병을 돌려준다
// // 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 수 없다

// // 보유 중인 빈 병(n)이 a개 이상이면 빈 병 a개를 콜라 b병으로 바꾼다
//   // 콜라가 a개 이상 있으면 다시 위 과정을 반복한다
// // 빈병 개수를 리턴한다




// solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b