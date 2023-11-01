function solution(dartResult) {
  const parseDart = (dart) => {
    const [_, score, bonus, option] = dart.match(
      /(\d{1,2})([SDT])([*#])?/
    );
    return [parseInt(score), bonus, option];
  };

  let scores = dartResult
    .match(/\d{1,2}[SDT][*#]?/g)
    .reduce((scores, dart, i) => {
      let [score, bonus, option] = parseDart(dart);
      score = Math.pow(score, "SDT".indexOf(bonus) + 1);

      if (option === "*") {
        if (i > 0) scores[i - 1] *= 2;
        score *= 2;
      } else if (option === "#") {
        score *= -1;
      }

      scores.push(score);
      return scores;
    }, []);

  return scores.reduce((a, b) => a + b, 0);
}

console.log(solution("1S2D*3T"));
