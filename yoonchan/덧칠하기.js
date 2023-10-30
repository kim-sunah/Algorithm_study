// 덧칠하기

// function solution(n,m,section) {
//     let maxNumber = Math.max(...section);
//     let minNumber = Math.min(...section);
//     let numberGap = maxNumber - minNumber + 1;

//     if(numberGap<=m){
//         return 1;
//     } else {
//         return Math.ceil(numberGap/m);
//     }
// };

// console.log(solution(8,4,[2,3,6]));
// console.log(solution(5,4,[1,3]));
// console.log(solution(4,1,[1,2,3,4]));

// 절반은 맞고 절반은 틀리네.. 반례를 찾아보자.

// console.log(solution(5,2,[1,3,5]))

// 생각하다가 반례 찾았다. m의 길이가 작은 경우 중간에 안칠하는 경우도 많음
// 아래의 반례에서는 2번만 칠하면 되는데 결과값으로 4가 나옴.
// console.log(solution(8,2,[2,7,8]))

//=======================================================================================
// function solution2(n,m,section) {
//     let maxNumber = Math.max(...section);
//     let minNumber = Math.min(...section);
//     let numberGap = maxNumber - minNumber + 1;
//     let gap = 0;

//     for(let i=0; i<section.length-1;i++){
//         if(section[i+1]-section[i]-1>=m){
//             gap += Math.floor((section[i+1]-section[i]-1)/m)
//         }
//     }

//     if(numberGap<=m){
//         return 1;
//     } else if(numberGap>m && gap === 0){
//         return Math.ceil(numberGap/m);
//     } else {
//         return Math.ceil(numberGap/m) - gap;
//     }
// };

// solution2(8,4,[2,3,6])
// console.log(solution2(8,2,[2,7,8]))
// solution2(5,4,[1,3])
// solution2(4,1,[1,2,3,4])

//맞는 갯수가 더 많아졌지만 아직도 반례가 있는듯?
// gap을 구하는 부분에서 다시 생각해보니 Maht.ceil보다는 Math.floor가 맞는듯?
// 근데 이렇게 하면 아예 성립이 안되는 부분도 생김. 아예 접근을 다른 방식으로 해야할듯..


//=============================================================================================
function solution3(n,m,section){
    let wallArr = [];
    for(let i=0;i<n;i++){
        wallArr.push(i+1);
    }

    let coloring =0;

    for(let j=0;j<n;j++){
        // console.log("wallArr first element=>",wallArr[0])
        if(section.includes(wallArr[0])){
            coloring++;
            for(k=0;k<m;k++){
                wallArr.shift(); 
            }
        } else {
            coloring +=0;
            wallArr.shift();
        }
        // console.log("coloring=>",coloring)
        // console.log("wallArr=>",wallArr);

    }

    return coloring;
}

// console.log(solution3(8,4,[2,3,6]))
// console.log(solution3(8,2,[2,7,8]))
// solution3(5,4,[1,3])
solution3(4,1,[1,2,3,4])