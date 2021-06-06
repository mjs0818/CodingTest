// 요세푸스 문제
const solution = (N, K) => {
  const array = Array.from({ length: N }, (v, i) => i + 1);
  let answer = [];
  let index = -1;
  while (array.length) {
    index = (index + K) % array.length;
    answer.push(array[index]);
    array.splice(index, 1);
    index--;
  }
  console.log(`<${answer.join(', ')}>`);
};

const readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  let [N, K] = line.split(' ');
  solution(parseInt(N), parseInt(K));
  rl.close();
});
