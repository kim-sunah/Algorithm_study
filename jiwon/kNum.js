function solution(array, commands) {
  var answer = [];

  function findK (arr) {
    var newArray = array.slice(arr[0]-1,arr[1]).sort((a,b)=>a-b);
    return newArray[arr[2]-1];
  };

  answer = commands.map(e => {
    return findK(e);
  });
  return answer;
}


//그냥 sort로 썼더니 하나 오류났다.


// function solution(array, commands) {
//   return commands.map(command => {
//       const [sPosition, ePosition, position] = command
//       const newArray = array
//           .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
//           .sort((a,b) => a - b)    

//       return newArray[position - 1]
//   })
// }




// function solution(array, commands) {
//   return commands.map(v => {
//       return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
//   });
// }



// function solution(array, commands) {
//   let answer = [];
//   for(let i = 0; i < commands.length; i++){
//     let eachCommand = commands[i]
//     let slice = array.slice(eachCommand[0] - 1, eachCommand[1])
//     answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1])
//   }

//   return answer;
// }