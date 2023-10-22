// 2016년

function solution(a,b) {
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let newDate = new Date(2016,a-1,b);
    const newDateDay = newDate.getDay()
    
    return day[newDateDay];
};



let a = 1;
let b = 19;
solution(1,19);


let later = new Date(2016,a,b)
console.log(later)
const later2 = later.getDay();
console.log(later2)