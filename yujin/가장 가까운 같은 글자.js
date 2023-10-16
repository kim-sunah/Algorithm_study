const solution = (s) =>
  [...s].map((c, i, arr) => {
    const pos = arr.lastIndexOf(c, i - 1);
    return pos !== -1 ? i - pos : -1;
  });

console.log(solution("banana"));
