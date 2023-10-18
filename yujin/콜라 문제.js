function solution(a, b, n) {
  let total = 0;
  while (n >= a) {
    let exchange = Math.floor(n / a);
    let remain = n % a;
    total += exchange * b;
    n = exchange * b + remain;
  }
  return total;
}
