function solution(n, computers) {
  var answer = 0;
  const isVisited = Array(n).fill(false);
  const Q = [];
  for (let i = 0; i < computers.length; i++) {
    if (!isVisited[i]) {
      Q.push(i);
      isVisited[i] = true;
      answer++;
    }
    while (Q.length) {
      const now = Q.shift();
      for (let i = 0; i < computers[now].length; i++) {
        if (!isVisited[i] && computers[now][i] === 1) {
          Q.push(i);
          isVisited[i] = true;
        }
      }
    }
  }
  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
