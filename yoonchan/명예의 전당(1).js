//명예의 전당

function solution(k,score) {
    let arr = [];
    let top = [];
    let answer = [];
    score.forEach((el)=>{
        arr.push(el);
        // console.log("arr.push",arr)
        arr.sort((a,b)=> b -a);
        // console.log("sort",arr)
        top = arr.slice(0,k);
        // console.log("top",top)
        answer.push(Math.min(...top));
        // console.log("answer",answer)
    })

    return answer;
};

let k=3;
let score = [10,100,20,150,1,100,200];
console.log(solution(k,score));

// console.log(Math.min(...score))
// console.log(typeof Math.min(...score))