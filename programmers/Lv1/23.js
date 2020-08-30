function solution(n) {
    let answer = Number((''+n).split('').sort().reverse().join(''));
    return answer;
}