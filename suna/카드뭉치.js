//왜 안될까 해서 질문하기를 봤습니다
//단어만 있어서 되는게 아니라 순서를 바꾸면 안되는거였네요

function solution(cards1, cards2, goal) {
    var answer = '';
    var card = [...cards1,...cards2]
    var word = new Set(card)
    for(i of goal){
        
        if(card.includes(i)){
            delete card[card.indexOf(i)]
        }else{
            return "No"
        }
    }
    return "Yes";
}

//고친 답
function solution(cards1, cards2, goal) {
    var answer = '';
    for(i of goal){
        if(cards1[0] ==i){
            cards1.shift()
        }else if(cards2[0] ==i){
            cards2.shift()
        }else{
            return "No"
        }
        console.log(i)
        console.log("cards1", cards1)
        console.log("cards2",cards2)
    }
    return "Yes"
}