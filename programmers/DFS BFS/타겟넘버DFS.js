function solution(numbers, target) {
  var answer = 0;
  const dfs = (idx, number) => {
    let prev = number;
    if (numbers.length === idx) {
      if (target === prev) {
        answer++;
      }
      return;
    }
    dfs(idx + 1, prev + numbers[idx]);
    dfs(idx + 1, prev - numbers[idx]);
  };
  dfs(0, 0);
  return answer;
}
