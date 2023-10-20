function solution(k, score) {
    var answer = [];
    var len = []
    for(i of score){
        //일단 3개 넣고
        answer.push(i)
        //배열이 k 만큼 차면
        if(answer.length >= k){
            //정렬을 하면 명예의 전당 점수대로 되니까
            answer.sort((a, b) => b - a);
            //거기서 최소값을 넣는....
            len.push(answer[k - 1]);
        }else{
        len.push(Math.min(...answer))
        }
    }
    return len;
}