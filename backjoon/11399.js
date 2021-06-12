let input = [];

const solution = (n, times) => {
  times.sort((a, b) => a - b);
  let finish = [times[0]];
  for (let i = 1; i < times.length; i++) {
    finish.push(finish[i - 1] + times[i]);
  }
  console.log(finish.reduce((acc, cur) => acc + cur));
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let N = Number(input.shift());
  let times = input[0].split(' ').map((el) => Number(el));
  solution(N, times);
  process.exit();
});
