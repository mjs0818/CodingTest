// 균형잡힌 세상
const solution = (input) => {
  input.forEach((line) => {
    const stack = [];
    if (line === '.') return;
    for (let i = 0; i < line.length; i++) {
      if (line[i] === '(' || line[i] === '[') {
        stack.push(line[i]);
      }
      if (line[i] === ')' && stack.pop() !== '(') {
        console.log('no');
        return;
      }

      if (line[i] === ']' && stack.pop() !== '[') {
        console.log('no');
        return;
      }
    }
    if (stack.length === 0) {
      console.log('yes');
    } else console.log('no');
  });
};

const input = [];
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
