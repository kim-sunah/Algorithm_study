function solution(n) {
  let array = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  let count = 0;

  for (let i = 2; i <= n; i++) {
    if (array[i]) {
      count++;
      for (let j = i * i; j <= n; j += i) {
        array[j] = false;
      }
    }
  }

  return count;
}
