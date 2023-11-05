function solution(babbling) {
  var answer = 0;
  // var canPronun = ["aya", "ye", "woo", "ma"];
  var cantPronun = babbling.map((e) => {
    if (e.includes("ayaaya")) return 1;
    else if (e.includes("yeye")) return 1;
    else if (e.includes("woowoo")) return 1;
    else if (e.includes("mama")) return 1;
    else return e;
  });
  var canPronun = cantPronun.map((e) => {
    e = String(e).replace(/aya/g, "");
    e = String(e).replace(/ye/g, "");
    e = String(e).replace(/woo/g, "");
    e = String(e).replace(/ma/g, "");
    return e;
  });
  canPronun.forEach((e) => {
    if (e.length === 0) answer += 1;
  });
  return answer;
}
