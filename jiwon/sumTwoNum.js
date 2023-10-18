function solution(numbers) {
  var answer = [];
  function sumNumbers(n, idx) {
    for (var i = 1; i + idx < numbers.length; i++) {
      if (!answer.includes(n + numbers[idx + i])) {
        answer.push(n + numbers[idx + i]);
      }
    }
  }
  numbers.forEach((element, idx) => {
    sumNumbers(element, idx);
  });
  return answer.sort((a, b) => a - b);
}



// function solution(numbers) {
//   const temp = []

//   for (let i = 0; i < numbers.length; i++) {
//       for (let j = i + 1; j < numbers.length; j++) {
//           temp.push(numbers[i] + numbers[j])
//       }
//   }

//   const answer = [...new Set(temp)]

//   return answer.sort((a, b) => a - b)
// }



// function solution(numbers) {
//   var answer = [];

//   numbers.forEach((v) => {
//     const num1 = numbers.slice();

//     let a = num1.indexOf(v);
//     num1.splice(a, 1);

//     num1.forEach((z) => {
//       let num2 = v + z;

//       if (!answer.includes(num2)) {
//         answer.push(num2);
//       }
//     });
//   });

//   return answer.sort((a, b) => a - b);
// }