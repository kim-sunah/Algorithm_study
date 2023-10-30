//기사단원의 무기 
// 몇개가 시간초과로 실패가 뜬다.
function solution(number,limit,power) {
    let numberArr= [];
    for(let i=1;i<=number;i++){
        numberArr.push(i);
    }

    let countDivisorArr =numberArr.map((el)=>{
        let countDivisor= 0;
        for(let i=1;i<=el;i++){
            if(el%i===0){
                countDivisor++;
            }
        }
        return countDivisor;
    })
    
    let filteredArr= countDivisorArr.map((el)=>{
        if(el>limit){
            return power;
        } else {
            return el;
        }
    })

    
    let answer = filteredArr.reduce((acc,el)=>{
        return acc+el},0)

    return answer;
};


solution(5,3,2)
//================================================================
//함수로 분리하면 나을까 싶었는데 안되네
function solution2(number,limit,power) {
    let arr= [];
    for(let i=1;i<=number;i++){
        arr.push(i);
    }

    let arr2 = arr.map((el)=>{
        return countDivisor(el);
    })

    let total =0;
    arr2.forEach((el)=>{
        if(el>limit){
            total += power;
        } else {
            total += el;
        }
    })

    function countDivisor(num) {
        let count=0;
        for(let i=1;i<=num;i++){
            if(num%i===0){
                count++;
            }
        }
        return count;
    }

    return total;

}
solution2(5,3,2)

//=============================================
function solution(number,limit,power) {
    let arr= [];
    for(let i=1;i<=number;i++){
        arr.push(i);
    }

    let arr2=[];
    arr.forEach((el)=>{
        let a= 0;
        for(let i=1;i<=el;i++){
            if(el%i===0){
                a++;
            }
        }
        arr2.push(a);
    })
    let total =0;
    arr2.forEach((el)=>{
        if(el>limit){
            total += power;
        } else {
            total += el;
        }
    })
    return total;
}