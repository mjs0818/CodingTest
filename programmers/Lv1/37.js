function solution(d, budget) {
    let answer = 0;
    d.sort((a,b)=>{
        return a-b;
    });
    for(let i = 0; i < d.length; i++){
        if(d[i] > budget){
            break;
        }
        answer++;
        budget -= d[i];
        
    }
    return answer;
}