function solution(N, stages) {
  return Array.from({ length: N }, (_, i) => i + 1)
    .map((stage) => [
      stage,
      stages.filter((x) => x === stage).length /
        stages.filter((x) => x >= stage).length,
    ])
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(([stage]) => stage);
}

function solution(N, stages) {
  let usersInStage = Array(N + 2).fill(0);

  for (let stage of stages) {
    usersInStage[stage]++;
  }

  let totalUsers = stages.length;

  return Array.from({ length: N }, (_, i) => i + 1)
    .map((stage) => {
      const failRate = usersInStage[stage] / totalUsers;
      totalUsers -= usersInStage[stage];
      return [stage, failRate];
    })
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    .map(([stage]) => stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
