function solution(X, Y) {
  const counts = Array(10)
    .fill(0)
    .map(() => Array(2).fill(0));

  [...X].forEach((num) => counts[num][0]++);
  [...Y].forEach((num) => counts[num][1]++);

  let result = "";

  for (let i = 9; i >= 0; i--) {
    const common = Math.min(counts[i][0], counts[i][1]);
    result += String(i).repeat(common);
  }

  return result[0] === "0" ? "0" : result.length ? result : "-1";
}

console.log(solution("100", "2345")); // -1
console.log(solution("100", "203045")); // 0
console.log(solution("100", "123450")); // 10
console.log(solution("12321", "42531")); // 321
console.log(solution("5525", "1255")); // 552
