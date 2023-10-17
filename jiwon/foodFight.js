function solution(food) {
  var answer = '';
  var foodNumber = food.slice(1).map(element => {
    return Math.floor(element/2);
  });
  var fighter = [];
  foodNumber.forEach((e, idx) => {
    for (var i=1; i<=e; i++){
      fighter.push(idx+1);
    }
  });
  answer = fighter.join('') + '0' + fighter.reverse().join('')
  return answer;
}





// function solution(food) {
//   let res = '';
//   for (let i = 1; i < food.length; i++) {
//       res += String(i).repeat(Math.floor(food[i]/2));
//   }

//   return res + '0' + [...res].reverse().join('');
// }


// function solution(food) {
//   let player1 = [];
//   let player2 = [];
//   let repeat = 0;
//   for (let i = 1; i <= food.length; i++) {
//       if (food[i] > 1) {
//           repeat = Math.floor(food[i] / 2);
//           for (let j = 0; j < repeat; j++)
//               player1.push(i)
//           for (let k = 0; k < repeat; k++)
//               player2.unshift(i)
//       }
//   }
//   player1.push(0);
//   player1 = player1.concat(player2);
//   return player1.join("");
// }