// 미로 탐색

const solution = (input) => {
  let [N, M] = input[0].split(' ');
  (N = parseInt(N)), (M = parseInt(M));
  let board = input.slice(1);
  board = board.map((el) => el.split(''));
  const move = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1],
  ]; // 상, 하, 좌, 우

  const q = [[0, 0, 1]];
  while (q.length) {
    const [y, x, cnt] = q.shift();
    board[y][x] = '0';
    if (y === N - 1 && x === M - 1) {
      console.log(cnt);
      break;
    }
    for (let i = 0; i < 4; i++) {
      let nextX = x + move[i][1];
      let nextY = y + move[i][0];

      // board 크기를 넘어가는 경우
      if (nextX < 0 || nextY < 0 || nextX >= M || nextY >= N) continue;

      // board[nextY][nextX]가 '0'인 경우
      if (board[nextY][nextX] === '0') continue;
      q.push([nextY, nextX, cnt + 1]);
    }
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
