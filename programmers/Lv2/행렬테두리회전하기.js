function solution(rows, columns, queries) {
  var answer = [];
  let board = Array(101)
    .fill(0)
    .map((row) => Array(101).fill(0));
  let count = 1;
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= columns; j++) {
      board[i][j] = count;
      count++;
    }
  }
  queries.forEach((query) => {
    let newBoard = board.map((row) => row.slice());
    let min = 10000;
    for (let i = 1; i <= query[3] - query[1]; i++) {
      let right = query[1] + i;
      let left = query[3] - i;
      newBoard[query[0]][right] = board[query[0]][right - 1];
      newBoard[query[2]][left] = board[query[2]][left + 1];
      min = Math.min(min, board[query[0]][right - 1], board[query[2]][left + 1]);
    }
    for (let i = 1; i <= query[2] - query[0]; i++) {
      let down = query[0] + i;
      let up = query[2] - i;
      newBoard[down][query[3]] = board[down - 1][query[3]];
      newBoard[up][query[1]] = board[up + 1][query[1]];
      min = Math.min(min, board[down - 1][query[3]], board[up + 1][query[1]]);
    }
    board = newBoard;
    answer.push(min);
  });
  return answer;
}
