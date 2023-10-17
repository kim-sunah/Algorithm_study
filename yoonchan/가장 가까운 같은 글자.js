// 가장 가까운 같은 글자
function solution(str){
    let answer = [];
    let newStr ="";
    for(let s of str){
        if(newStr.includes(s)===false){
            newStr += s;
            answer.push(-1);
        } else {
            newStr += s;
            answer.push(newStr.lastIndexOf(s) - newStr.lastIndexOf(s,newStr.lastIndexOf(s)-1))
            // 풀긴했는데 이 부분이 마음에 걸린다. 너무 지저분해;;;
            // 'lastindexof의 두번째 인덱스 - lastindexof의 첫번째 인덱스' 를 하고 싶었을 뿐인데,,
        }
    }
    return answer;
}

let str = "banana";
console.log(solution(str));

console.log(str.indexOf("n",2));