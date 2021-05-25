function solution(number, k) {
  let answer = [number[0]];
  for (let i = 1; i < number.length; i++) {
    while (k > 0 && answer[answer.length - 1] < number[i]) {
      answer.pop();
      k--;
    }
    answer.push(number[i]);
  }
  if (k > 0) {
    answer.splice(answer.length - k, k);
  }
  return answer.join('');
}
