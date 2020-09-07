function solution(priorities, location) {
    let answer = 0;
    while(priorities){
        let max = Math.max(...priorities);
        for(let i = 0; i < priorities.length; i++){
            if(priorities[0] === max){
                priorities.shift();
                answer++;
                location--;
                break;
            }else{
                priorities.push(priorities.shift());
                location--;
                if(location<0){
                    location = priorities.length - 1;
                }
            }
        }
        if(location === -1){
            break;
        }
    }
    return answer;
}