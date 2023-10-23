function solution(answers) {
  const students = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = students.map(
    (pattern) =>
      answers.filter(
        (answer, index) => answer === pattern[index % pattern.length]
      ).length
  );

  const maxScore = Math.max(...scores);

  return scores.reduce(
    (acc, score, index) =>
      score === maxScore ? [...acc, index + 1] : acc,
    []
  );
}
