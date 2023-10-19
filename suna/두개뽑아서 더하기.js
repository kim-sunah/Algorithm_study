function solution(numbers) {
    var answer = [];
    for(j in numbers){
        for(i in numbers){
            if(i != j){
                answer.push(numbers[i]+numbers[j])
            }
        }
    }
    const set = new Set(answer);
    answer = [...set].sort((a,b)=>(a-b));
    return answer;
}