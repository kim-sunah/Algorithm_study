function solution(babbling) {
  return babbling.reduce((count, word) => {
    if (
      !/(aya|ye|woo|ma)\1+/.test(word) &&
      /^(aya|ye|woo|ma)+$/.test(word)
    ) {
      count++;
    }
    return count;
  }, 0);
}
