function solution(arr)
{
    var answer = [];
    arr.forEach(element => {
        if(answer.length === 0){
            answer.push(element);
        }else{
            if(answer[answer.length-1] !== element){
                answer.push(element);
            } 
        }
    });
    
    return answer;
}