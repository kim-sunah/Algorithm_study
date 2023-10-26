function solution(number, limit, power) {
  let totalScore = 0;
  let numArray = new Array(number)
    .fill(0)
    .map((_, index) => index + 1);

  numArray.forEach((n) => {
    let divisorCount = 0;
    for (let i = 1; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        if (n / i == i) {
          divisorCount++;
        } else {
          divisorCount += 2;
        }
      }
    }
    totalScore += divisorCount > limit ? power : divisorCount;
  });
  return totalScore;
}
