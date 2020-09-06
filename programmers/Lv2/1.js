function solution(n) {
    let answer = '';
    while(n > 0){
        let num = n % 3;
        if(num === 0){
            answer = 4 + answer;
        }else{
            answer = num + answer;
        }
        n = Math.floor(n/3);
    }
    return answer;
}