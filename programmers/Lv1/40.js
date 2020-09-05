function solution(dartResult) {
    let answer = 0;
    let scores = [];
    let score = '';

    for(let i = 0; i < dartResult.length; i++){
        if(dartResult[i] === 'S'){
            scores.push(+score);
            score = '';
            continue;
        }
        if(dartResult[i] === 'D'){
            scores.push(Math.pow(+score,2));
            score = '';
            continue;
        }
        if(dartResult[i] === 'T'){
            scores.push(Math.pow(+score,3));
            score = '';
            continue;
        }
        if(dartResult[i] === '*'){
            if(scores.length > 1){
                scores[scores.length - 1] *= 2;
                scores[scores.length - 2] *= 2;    
            }else{
                scores[scores.length - 1] *= 2;
            }
            continue;
        }
        if(dartResult[i] === '#'){
            scores[scores.length - 1] *= -1; 
            continue;
        }
        score += dartResult[i];
    }
    answer = scores[0] + scores[1] + scores[2]
    return answer;
}