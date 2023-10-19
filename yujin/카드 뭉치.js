function solution(cards1, cards2, goal) {
  let i = 0;
  let j = 0;

  for (let word of goal) {
    if (i < cards1.length && cards1[i] === word) i++;
    else if (j < cards2.length && cards2[j] === word) j++;
    else return "No";
  }

  return "Yes";
}
