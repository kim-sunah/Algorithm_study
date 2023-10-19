// 카드 뭉치

// function solution(cards1,cards2,goal) {
//     const exist1 = goal.filter(existInCard1);
//     const exist2 = goal.filter(existInCard2);

//     function existInCard1(value) {
//         const cardFilter = cards1.filter((el)=>
//         el === value
//         )
//     };

//     function existInCard2(value) {
//         if(cards2.includes(value)){
//             return true;
//         } else {
//             return false;
//         }
//     };

//     console.log(exist1);
//     console.log(exist2);
// };

// let cards1 = ["i", "drink", "water"];
// let cards2 = ["want", "to"];
// let goal = ["i","want","to","drink","water"];
// console.log(solution());


// ============================================================

// function solution(cards1,cards2,goal) {
//     const result = goal.map((el)=>{
//         return cards1.includes(el) || cards2.includes(el)
//     })
    
//     const answer = result.reduce((acc,el)=>{
//         return acc + el;
//     })

//     if(answer===5){
//         return "Yes"
//     } else {
//         return "No"
//     }
// };


// let cards1 = ["i", "drink", "water"];
// let cards2 = ["want", "to"];
// let goal = ["i","want","to","drink","water"];
// console.log(solution(cards1,cards2,goal));

//===============================================================

// function solution(cards1,cards2,goal) {
//     let total = 0;
    
//     goal.forEach((el)=>{
//         if(cards1.includes(el) || cards2.includes(el)===true){
//             total +=1;
//         }
//     })
    
//     if(total ===5){
//         return "Yes"
//     } else {
//         return "No"
//     };

// };


// let cards1 = ["i", "drink", "water"];
// let cards2 = ["want", "to"];
// let goal = ["i","want","to","drink","water"];
// console.log(solution(cards1,cards2,goal));


// 아...? 문제를 잘못 이해했네.....
//===========================================================

function solution (cards1,cards2,goal) {
    let answer = "Yes"

    goal.forEach((el)=> {
        if(el === cards1[0]){
            cards1.shift();
        } else if(el === cards2[0]){
            cards2.shift();
        } else {
            answer = "No"
        }
    })

    return answer;
}

let cards1 = ["i", "drink", "water"];
let cards2 = ["want", "to"];
let goal = ["i","want","to","drink","water"];
console.log(solution(cards1,cards2,goal));

// 만약 효율을 늘리고 싶으면 배열을 뒤집고 pop메서드를 사용하면 될듯?
// shift 라는 것이 실행할 때마다 배열을 한칸씩 앞으로 당겨줘야 하기 때문에!