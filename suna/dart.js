// function solution(dartResult) {
//     var answer = 0;
//     var num = []
//     for(let i=0; i<dartResult.length; i++) {
//         if(dartResult[i]=='S'||dartResult[i]=='T'||dartResult[i]=='D'){
//             num.push(Number(dartResult.substring(i-2,i).replace(/[^0-9]/g, '')))
//             num.push(dartResult.substring(i,i+2).replace(new RegExp("[(0-9)]", "gi"), "") )
//         }
//     }
//     console.log(num)
//     for(i in num){
//         if(String(num[i]).includes('D')){
//             console.log("제곱 2",num[i-1])
//             num[i-1]= num[i-1]**2
//         }else if(String(num[i]).includes("T")){
//             console.log("제곱 3",num[i-1])
//             num[i-1]= num[i-1]**3
//         }
//         if(String(num[i]).includes('*')){
//             console.log("곱하기 2",num[i-1])
//             num[i-1] = num[i-1]*2
//             if(num[i-3]){
//                 num[i-3] = num[i-3]*2
//             }
//         }
//         if(String(num[i]).includes('#')){
//             console.log("마이너스 2",num[i-1])
//             num[i-1] = num[i-1]*-1
//         }
//     }
//     console.log(num)
//     return num[0]+num[2]+num[4];
// }

// solution("1T2D3D#")

function solution(dartResult) {
    let numberArr = [];
    let specialArr = [];
    const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(Number(dartResult[i]))) {
            let bonus = dartResult[i + 1] === "S" ? 1 : dartResult[i + 1] === "D" ? 2 : 3;
            let number = Math.pow(Number(dartResult[i]), bonus);

            numberArr.push(number);
            console.log("iiii",i)
            console.log("wwwww",dartResult[i])
            console.log("ccccc",regExp.test(dartResult[i+2]))
            console.log(dartResult)

            if(regExp.test(dartResult[i+2])){
                //82번째 줄 콘솔로그 빼면 왜 결과값이 바뀌냐 웃기네 ㅋㅋㅋㅋ (?????)
                console.log("bbbbb",dartResult[i+2])
                // console.log("aaaaa",regExp.test(dartResult[i+2]))
                specialArr.push(dartResult[i+2])
            } else {
                specialArr.push(null)
            }
        }  
    }
    console.log(numberArr)
    console.log(specialArr)
    numberArr.forEach((el,i)=>{
        if(specialArr[i]===null){
            return el
        } else if(specialArr[i]==="*"){
            numberArr[i-1] *= 2;
            numberArr[i] *= 2;
        } else {
            numberArr[i] = -numberArr[i]
        }
    })
    
    let total=0;
    numberArr.forEach((el)=>{
        total += el;
    })
    console.log(total)
    return total;
}
const dartResult = "1S*2T*3S"
solution(dartResult);