function solution(s) {
    let number = '0123456789';
    let answer = true;
    
    if(s.length !== 4 && s.length !== 6){
        answer = false;
    }
    for(let i = 0; i < s.length; i++){
        if(!number.includes(s[i])){
            answer = false;
        }
    }
    return answer;
}
