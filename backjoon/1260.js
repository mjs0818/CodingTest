/*
그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오.
단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 
정점 번호는 1번부터 N번까지이다.

입력 : 
첫 줄
정점의 개수 N, 간선의 개수 M, 시작 정점 번호 V 

간선이 연결하는 두 정점의 번호 M개
*/

const solution = (n, edges, start) => {
  const graph = Array(n + 1)
    .fill(0)
    .map((array) => Array(n + 1).fill(0));
  for (let i = 0; i < edges.length; i++) {
    let from = parseInt(edges[i][0]);
    let to = parseInt(edges[i][1]);
    graph[from][to] = 1;
    graph[to][from] = 1;
  }
  const resultBFS = BFS(n, graph, start).join(' ');
  const resultDFS = DFS(n, graph, start).join(' ');
  console.log(resultDFS);
  console.log(resultBFS);
};

const BFS = (n, graph, start) => {
  const isVisited = Array(n + 1).fill(false);
  const Q = [start];
  const answer = [];
  isVisited[start] = true;
  while (Q.length > 0) {
    const now = Q.shift();
    answer.push(now);
    for (let i = 1; i < graph.length; i++) {
      if (graph[now][i] === 1 && !isVisited[i]) {
        isVisited[i] = true;
        Q.push(i);
      }
    }
  }
  return answer;
};

const DFS = (n, graph, start) => {
  const isVisited = Array(n + 1).fill(false);
  const answer = [];
  const aux = (now) => {
    if (isVisited[now]) {
      return;
    }
    isVisited[now] = true;
    answer.push(now);
    for (let i = 1; i < graph.length; i++) {
      if (graph[now][i]) {
        aux(i);
      }
    }
  };
  aux(start);

  return answer;
};

const input = [];

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  input.push(line.split(' '));
}).on('close', function () {
  let [N, M, V] = input[0];
  solution(parseInt(N), input.slice(1), parseInt(V));
  process.exit();
});
