function solution(numbers, target) {
  let Q = [0];
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    const nextQ = [];
    for (let j = 0; j < Q.length; j++) {
      nextQ.push(Q[j] + numbers[i]);
      nextQ.push(Q[j] - numbers[i]);
    }
    Q = nextQ;
  }
  for (let i = 0; i < Q.length; i++) {
    if (Q[i] === target) {
      answer++;
    }
  }
  return answer;
}
console.log(solution([1, 1, 1, 1, 1], 3));
