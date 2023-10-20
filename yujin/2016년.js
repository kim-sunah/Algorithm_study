function solution(a, b) {
  return new Date(`2016-${a}-${b}`)
    .toLocaleString("en-us", { weekday: "short" })
    .toUpperCase();
}
