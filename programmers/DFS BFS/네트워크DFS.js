function solution(n, computers) {
  var answer = 0;
  const isVisited = Array(n).fill(false);
  const dfs = (computer, number) => {
    if (isVisited[number]) {
      return;
    }
    isVisited[number] = true;
    for (let i = 0; i < computer.length; i++) {
      if (i !== number && computer[i] === 1) {
        dfs(computers[i], i);
      }
    }
  };
  for (let i = 0; i < computers.length; i++) {
    if (!isVisited[i]) {
      dfs(computers[i], i);
      answer++;
    }
  }

  return answer;
}
