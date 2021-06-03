/*
신종 바이러스인 웜 바이러스는 네트워크를 통해 전파된다. 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 된다.
예를 들어 7대의 컴퓨터가 네트워크 상에서 연결되어 있다고 하자. 
1번 컴퓨터가 웜 바이러스에 걸리면 웜 바이러스는 2번과 5번 컴퓨터를 거쳐 3번과 6번 컴퓨터까지 전파되어 2, 3, 5, 6 네 대의 컴퓨터는 웜 바이러스에 걸리게 된다. 
하지만 4번과 7번 컴퓨터는 1번 컴퓨터와 네트워크상에서 연결되어 있지 않기 때문에 영향을 받지 않는다.

입력:
첫째 줄 - 컴퓨터 갯수 100이하
둘째 줄 - 연결된 컴퓨터 쌍의 갯수
컴퓨터 번호 쌍

출력: 감염된 컴퓨터 수
*/

const solution = (n, edges) => {
  let count = -1;
  const graph = Array(n + 1)
    .fill(0)
    .map((array) => Array(n + 1).fill(0));
  const isVisited = Array(n + 1).fill(false);
  for (let i = 0; i < edges.length; i++) {
    let from = parseInt(edges[i][0]);
    let to = parseInt(edges[i][1]);
    graph[from][to] = 1;
    graph[to][from] = 1;
  }
  const dfs = (now) => {
    if (isVisited[now]) {
      return;
    }

    isVisited[now] = true;
    count++;
    for (let i = 1; i < graph.length; i++) {
      if (graph[now][i] === 1) {
        dfs(i);
      }
    }
  };
  dfs(1);
  console.log(count);
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
  let n = parseInt(input[0]);
  solution(n, input.slice(2));
  process.exit();
});
