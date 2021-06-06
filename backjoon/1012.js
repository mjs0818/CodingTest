const solution = (input) => {
  let T = parseInt(input.shift());
  while (T--) {
    let [M, N, K] = input.shift().split(' ');
    let count = 0;
    M = parseInt(M);
    N = parseInt(N);
    K = parseInt(K);
    let board = Array(M)
      .fill(0)
      .map((array) => Array(N).fill(0));
    for (let i = 0; i < K; i++) {
      let [x, y] = input[i].split(' ');
      board[parseInt(x)][parseInt(y)] = 1;
    }

    const dfs = (x, y) => {
      if (y < 0 || y >= N || x < 0 || x >= M) {
        return;
      } else if (!board[x][y]) return;
      else {
        board[x][y] = 0;

        dfs(x + 1, y);
        dfs(x - 1, y);
        dfs(x, y + 1);
        dfs(x, y - 1);
      }
    };
    for (let i = 0; i < K; i++) {
      let [x, y] = input[i].split(' ');
      if (board[x][y]) {
        dfs(parseInt(x), parseInt(y));
        count++;
      }
    }
    input = input.slice(K);
    console.log(count);
  }
};

const input = [];
const readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
});
