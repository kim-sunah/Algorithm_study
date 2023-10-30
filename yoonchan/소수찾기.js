// 소수 찾기, 이것도 시간초과뜨네;;;
function solution(n){
    let arr=[];
    for(let i=1;i<=n;i++){
        arr.push(i);
    }
    let total=0;

    arr.forEach((el)=>{
        if(isPrime(el)){
            total++
        }
    })

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
    return total
}