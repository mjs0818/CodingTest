function solution(n) {
    var answer = [];
    answer = (''+n).split('').reverse();
    answer = answer.map(el => {
       return Number(el);
    })
    return answer;
}
