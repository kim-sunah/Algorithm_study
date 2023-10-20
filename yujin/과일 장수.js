function solution(k, m, score) {
  const counts = Array(k + 1).fill(0);
  score.forEach((val) => counts[val]++);

  let profit = 0;
  for (let i = k; i > 0; --i) {
    const boxes = Math.floor(counts[i] / m);
    profit += boxes * i * m;
    counts[i - 1] += counts[i] % m;
  }

  return profit;
}
