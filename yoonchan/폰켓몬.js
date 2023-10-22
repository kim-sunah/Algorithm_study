//폰켓몬

function solution(nums) {
    let noDuplicate = new Set();
    let arr = [];
    nums.forEach((el)=>{
        noDuplicate.add(el);
    })

    arr = [...noDuplicate];

    if(arr.length>nums.length/2){
        return nums.length/2;
    } else {
        return arr.length;
    }
}