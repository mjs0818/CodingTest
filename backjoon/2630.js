const solution = (size, matrix) => {
  const aux = (rs, re, cs, ce) => {
    if (rs === re) return String(matrix[rs][cs]);

    const rowMid = Math.floor((rs + re) / 2);
    const colMid = Math.floor((cs + ce) / 2);

    const LU = aux(rs, rowMid, cs, colMid);
    const RU = aux(rowMid + 1, re, cs, colMid);
    const LD = aux(rs, rowMid, colMid + 1, ce);
    const RD = aux(rowMid + 1, re, colMid + 1, ce)
    
    const result = LU + RU + LD + RD;

    if(result === '1111' || result === '0000') return LU;
    else return result;
  }
  let result = aux(0, size - 1, 0, size - 1)
  let blue = result.split('').filter(c => c === '1').length;
  console.log(result.length - blue);
  console.log(blue);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const size = Number(input.shift());
  const matrix = input.map((row) => row.split(' '));
  solution(size, matrix);
  process.exit();
});
