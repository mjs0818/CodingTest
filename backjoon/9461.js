let input = [];

const solution = (n) => {
  let memo = [1, 1, 1];
  for (let i = 3; i < n; i++) {
    memo[i] = memo[i - 2] + memo[i - 3];
  }
  console.log(memo[n - 1]);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let T = Number(input.shift());
  while (T--) {
    let N = Number(input.shift());
    solution(N);
  }
  process.exit();
});
