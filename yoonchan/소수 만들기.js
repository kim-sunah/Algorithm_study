// 소수 만들기
// const getCombinations = function (arr, selectNumber) {
//     const results = [];
//     let answer=[];
//     if (selectNumber === 1) return arr.map((el) => [el]);
//     console.log(arr);

//     arr.forEach((fixed, index, origin) => {
//       const rest = origin.slice(index + 1);

//       const combinations = getCombinations(rest, selectNumber - 1);

//       const attached = combinations.map((el) => [fixed, ...el]);

//       results.push(...attached);

//     });
//     answer = results.forEach((el)=>{
//         el.reduce((acc,el)=>{return acc+el},0)
//     })
//     return answer;
// }

// let arr = [1,2,3,4];
// let selectNumber = 3;
// getCombinations(arr,selectNumber)

//======================================================================
// function solution(nums) {
//     let noDuplicate = new Set();
//     let result = [];
//     let answer = [];
//     let total = 0;
//     for(let i=0;i<nums.length;i++){
//         for(let j=1;j<nums.length;j++){
//             for(let k=2;k<nums.length;k++){
//                 if(i !==j && j !==k && k !== i){
//                     noDuplicate.add(nums[i]+nums[j]+nums[k]);
//                     result = [...noDuplicate];
//                     let answer = result.filter((el)=>{
//                         if(el===1){return false}
//                         for(let i=2;i<el;i++){
//                             if(el%i===0){
//                                 return false;
//                             } else {
//                                 total += 1;
//                             }
//                         }
//                     })
//                 }
//             }
//         }
//     }
//     console.log(total);
//     return total;
// }

// let nums = [1,2,3,4]
// let nums2 = [1,2,7,6,4]

// solution(nums);

//===================================================================
function solution(nums) {
    let noDuplicate = new Set();
    let result = [];
    let total = 0;

    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                noDuplicate.add(sum);
            }
        }
    }

    result = [...noDuplicate];

    result.forEach((el) => {
        if (isPrime(el)) {
            total += 1;
        }
    });
    console.log(result);
    console.log(total);
    return total;
}

let nums = [1, 2, 3, 4];
let nums2 = [1, 2, 7, 6, 4];

solution(nums);
