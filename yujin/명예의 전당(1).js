function solution(k, score) {
  let result = [];
  let minHeap = [];

  for (let i = 0; i < score.length; i++) {
    if (minHeap.length < k) {
      minHeap.push(score[i]);
      minHeap.sort((a, b) => a - b);
    } else if (score[i] > minHeap[0]) {
      minHeap.shift();
      minHeap.push(score[i]);
      minHeap.sort((a, b) => a - b);
    }
    result.push(minHeap[0]);
  }

  return result;
}
