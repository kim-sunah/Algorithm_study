// function solution(array, commands) {
//   return commands.map((command) => {
//     const [i, j, k] = command;
//     const sliced = array.slice(i - 1, j);
//     sliced.sort((a, b) => a - b);
//     return sliced[k - 1];
//   });
// }

// const solution = (array, commands) =>
//   commands.map(([i, j, k]) => array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
