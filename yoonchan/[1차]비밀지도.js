// 비밀지도 찾기


let arr1 = [9, 20, 28, 18, 11];
let arr2 = [30, 1, 21, 17, 28];
let n = 5;




function solution(n, arr1, arr2) {
    let newArr = [];
    let arr1Binary = arr1.map((el) => {
        return el.toString(2).padStart(n, '0');
    })
    let arr2Binary = arr2.map((el) => {
        return el.toString(2).padStart(n, '0');
    })

    for (let i = 0; i < arr1Binary.length; i++) {

        let newNum = '';

        for (let j = 0; j < arr1Binary[i].length; j++) {
            if (arr1Binary[i][j] === '1' || arr2Binary[i][j] === '1') {
                newNum += '#';
            } else {
                newNum += ' '
            }
        }
        newArr.push(newNum);
    }
    return newArr;
}

console.log(solution());

console.log(newArr)



// console.log(arr1Binary);
// console.log(arr2Binary);










// let arr1Binary = arr1.map((el) => {
//     return el.toString(2).padStart(n, '0');
// })
