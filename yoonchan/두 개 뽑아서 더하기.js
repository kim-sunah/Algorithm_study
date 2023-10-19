// 두 개 뽑아서 더하기

// function solution(numbers){
//     const newSet = new Set();
//     numbers.map((el)=>{
//         newSet.add(el);
        
//     })

//     return newSet;
// }

//=========================================================

// let numbers = [2,1,3,4,1];
// console.log(solution(numbers));
// console.log()


// function solution() {
//     let newArr = numbers.map((el)=>{
//         return el + numbers.map((el)=>{
//             return el
//         })
//     });
//     return newArr;
// }

// let numbers = [2,1,3,4,1];
// solution(numbers);
// console.log(solution(numbers));
// console.log()


// =========================================================

function solution(numbers) {
    let answer = [];
    const sum = new Set();

    for(let i=0;i<numbers.length;i++){
        for(let j=0;j<numbers.length;j++){
            if (i!==j){
                sum.add(numbers[i]+numbers[j]);
            }

        }
    }
    sum.forEach((el)=>{
        answer.push(el);
    })
    answer.sort(function(a,b){
        return a-b});

    return answer;
};

// let numbers = [2,1,3,4,1];
let numbers = [5,0,2,7];
solution(numbers);
console.log(solution(numbers));
console.log()