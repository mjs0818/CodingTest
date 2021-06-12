const solution = (N, bulks) => {
  let ranks = [];
  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i === j) continue;
      if (bulks[i][0] < bulks[j][0] && bulks[i][1] < bulks[j][1]) {
        rank++;
      }
    }
    ranks.push(rank);
  }
  console.log(ranks.join(' '));
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
  let N = Number(input.shift());
  let bulks = input.map((bulk, idx) => [...bulk.split(' '), idx].map((el) => Number(el)));
  solution(N, bulks);
});
