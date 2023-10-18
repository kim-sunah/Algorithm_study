const solution = (numbers) => {
  const sums = new Set();

  numbers.forEach((num1, i) => {
    numbers.slice(i + 1).forEach((num2) => {
      sums.add(num1 + num2);
    });
  });

  return [...sums].sort((a, b) => a - b);
};
