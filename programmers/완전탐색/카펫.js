function solution(brown, yellow) {
  var answer = [];
  let length = brown / 2 + 2;
  let row = Math.ceil(length / 2);
  let col = Math.floor(length / 2);
  while (row >= 3 && col >= 3) {
    if ((row - 2) * (col - 2) === yellow) {
      return [row, col];
    }
    row++;
    col--;
  }
}
