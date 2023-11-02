function solution(dartResult) {
  var answer = 0;
  var option = [1, 1, 1];
  var Type = [0, 0, 0];

  //옵션 구하기
  [...dartResult].forEach((e, idx) => {
    if (e === "*") {
      if (idx === [...dartResult].length - 1) {
        option[1] *= 2;
        option[2] *= 2;
      } else if (idx >= 4) {
        option[0] *= 2;
        option[1] *= 2;
      } else {
        option[0] *= 2;
      }
    }
    if (e === "#") {
      if (idx === [...dartResult].length - 1) {
        option[2] *= -1;
      } else if (idx >= 4) {
        option[1] *= -1;
      } else {
        option[0] *= -1;
      }
    }
  });

  //보너스 구하기
  var dartType = dartResult
    .replace(/[0-9]/g, "")
    .replaceAll("*", "")
    .replaceAll("#", "");
  for (i = 0; i < 3; i++) {
    if (dartType[i] == "S") Type[i] = 1;
    if (dartType[i] == "D") Type[i] = 2;
    if (dartType[i] == "T") Type[i] = 3;
  }

  //점수 구하기
  var dartNum = dartResult
    .replaceAll("*", "")
    .replaceAll("#", "")
    .replace(/[^0-9]/g, ",")
    .split(",");

  //총합 구하기
  for (i = 0; i < 3; i++) {
    answer += dartNum[i] ** Type[i] * option[i];
  }
  return answer;
}

// function solution(dartResult) {
//   const bonus = { 'S': 1, 'D': 2, 'T': 3 },
//         options = { '*': 2, '#': -1, undefined: 1 };

//   let darts = dartResult.match(/\d.?\D/g);

//   for (let i = 0; i < darts.length; i++) {
//       let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
//           score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

//       if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

//       darts[i] = score;
//   }

//   return darts.reduce((a, b) => a + b);
// }

//\D 패턴은 숫자가 아닌 문자들을 포함시킵니다.
