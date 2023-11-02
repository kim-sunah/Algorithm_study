//n= 스테이지
//stages = 	[2, 1, 2, 6, 2, 4, 3, 3]
function solution(N, stages) {
    var answer = [];
    var result = [];
    for(let i=1; i<=N; i++) {
        answer.push([i,stages.filter(a=>a==i).length/stages.filter(a=>a>=i).length])
        
    }
    answer.sort((a,b)=>b[1]-a[1])
    answer.forEach(a => result.push(a[0]))
    // console.log(answer)
    return result;
}

console.log(solution(5,[2, 1, 2, 6, 2, 4, 3, 3]))
