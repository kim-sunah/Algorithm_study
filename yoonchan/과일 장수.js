// 과일 장수

// function solution(k,m,score) {

// };

// let k = 3;
// let m = 4;
// let score = [1,2,3,1,2,3,1];
// solution();

// 최대한 가격이 낮은 사과끼리 묶어서 파는 방법이 가격을 제일 잘 받을 수 있는 방법이다.
// 배열을 정렬한 뒤 m개씩 잘라 배열에 넣는다.
// m개의 배열에서 가장 낮은 값들만 골라 모두 더한다. 메서드를 안쓰고 낮은 값을 고르려면 정렬이 오름차순일 경우 인덱스0, 내림차순일 경우 마지막 인덱스

// score.sort((a,b)=> b-a);
// console.log(score);

// Math.floor(score.length/m); //만들 수 있는 상자의 개수
// const newArr = score.slice(0,score.length-score.length%m+1) // 여러개의 배열을 딱 나누기 위해 배열을 미리 잘라줌.
// 배열 나눠줄 필요없이 m개씩 분류했을 때 그 m의 배열의 인덱스들만 더해주면 될 것 같아. 이 과정이 필요 없을지도.(반복문의 길이만 잘 조절하면 될듯)

function solution(k,m,score) {
    let answer = 0;
    score.sort((a,b)=>b-a);
    // console.log("score=>", score)

    let newArr = score.slice(0,score.length-score.length%m);
    // console.log("newArr=>",newArr);
    
    const filteredArr = newArr.filter((el,idx)=>{
        if(idx%m===m-1){
            return el;
        }
    })
    // console.log("filteredArr=>",filteredArr);

    filteredArr.forEach((el)=>{
        answer += el*m;
    })

    // console.log("answer=>",answer)
    return answer;
};

// let k = 3;
// let m = 4;
// let score = [1,2,3,1,2,3,1];
// solution(k,m,score);

let k = 4;
let m = 3;
let score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];
solution(k,m,score);