function solution(board) {
  let max = 0;
  let memo = Array(board.length)
    .fill(0)
    .map((row, idx) => Array(board[idx].length).fill(0));
  for (let i = 0; i < memo.length; i++) {
    for (let j = 0; j < memo[i].length; j++) {
      if (i === 0 || j === 0) memo[i][j] = board[i][j];
      else if (board[i][j] === 1)
        memo[i][j] =
          Math.min(memo[i - 1][j], memo[i][j - 1], memo[i - 1][j - 1]) + 1;

      max = Math.max(max, memo[i][j]);
    }
  }
  console.log(memo);
  return max * max;
}
