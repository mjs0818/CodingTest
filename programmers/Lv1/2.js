function solution(seoul) {
    var answer = ''
    let index = seoul.indexOf('Kim');
    answer = `김서방은 ${index}에 있다`
    return answer;
};

console.log(solution(['Seol', 'Park', 'Lee', 'Kim']));