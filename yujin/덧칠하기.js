function solution(n, m, section) {
  let count = 0;
  let start = 1;

  section.push(n + 1);

  section.forEach((end) => {
    if (end - start >= m) {
      count += Math.ceil((end - start) / m);
      start = end;
    }
  });

  return count;
}
