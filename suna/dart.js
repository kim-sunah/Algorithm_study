function solution(dartResult) {
    var answer = 0;
    var num = []
    for(let i=0; i<dartResult.length; i++) {
        if(dartResult[i]=='S'||dartResult[i]=='T'||dartResult[i]=='D'){
            num.push(Number(dartResult.substring(i-2,i).replace(/[^0-9]/g, '')))
            num.push(dartResult.substring(i,i+2).replace(new RegExp("[(0-9)]", "gi"), "") )
        }
    }
    console.log(num)
    for(i in num){
        if(String(num[i]).includes('D')){
            console.log("제곱 2",num[i-1])
            num[i-1]= num[i-1]**2
        }else if(String(num[i]).includes("T")){
            console.log("제곱 3",num[i-1])
            num[i-1]= num[i-1]**3
        }
        if(String(num[i]).includes('*')){
            console.log("곱하기 2",num[i-1])
            num[i-1] = num[i-1]*2
            if(num[i-3]){
                num[i-3] = num[i-3]*2
            }
        }
        if(String(num[i]).includes('#')){
            console.log("마이너스 2",num[i-1])
            num[i-1] = num[i-1]*-1
        }
    }
    console.log(num)
    return num[0]+num[2]+num[4];
}

solution("1T2D3D#")