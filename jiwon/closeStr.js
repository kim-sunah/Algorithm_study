function solution(s) {
  var answer = [-1];
  for (let i = 1; i < s.length; i++) {
    var strNumber = s.lastIndexOf(s[i],i-1);
    (strNumber === -1) ? answer.push(-1) : answer.push(i-strNumber);
  }
  return answer;
}




// function solution(s) {
//   const hash={};

//   return [...s].map((v,i)=>{
//       let result = hash[v] !== undefined ? i - hash[v] : -1;
//       hash[v] = i;
//       return result;
//   });
// }



// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });