function solution(N, stages) {
    let answer = [];
    let numberOfStages = Array.from({length : N+1}, ()=> 0);
    let total = stages.length;
    let length = 1;
    stages.sort((a,b)=>{
        return a-b;
    })
    stages.reduce((pre,cur, i)=>{
        if(pre === cur){
            length++;
            if(i === stages.length - 1 && cur <= N){
                numberOfStages[cur] = length / total;
            }
            return cur;
        }
        else if(pre !== cur){
            numberOfStages[pre] = length / total;
            total -= length;
            length = 1;
            if(i === stages.length - 1 && cur <= N){
                numberOfStages[cur] = length / total;
            }
            return cur;
        }
    })
    numberOfStages[0] = -1;
    console.log(numberOfStages);
    while(answer.length < N){
        let max = Math.max.apply(null,numberOfStages);
        let index = numberOfStages.indexOf(max);
        answer.push(index);
        numberOfStages[index]=-1;
    }
    return answer;
}
console.log(solution(4,[4,4,4,4,4]));