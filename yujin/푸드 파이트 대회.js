const solution = (food) =>
  food.reduceRight((str, value, i) => {
    let half = Math.floor(value / 2);
    let repeat = String(i).repeat(half);
    return repeat + str + repeat;
  }, "0");
