let input = [];

const solution = (n) => {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < n; i++) {
    if (input[i] === 0) {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }
  stack.forEach((el) => (answer += el));
  console.log(answer);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  let n = input.shift();
  solution(n);
  process.exit();
});
