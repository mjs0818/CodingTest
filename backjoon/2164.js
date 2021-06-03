const solution = (n) => {
  let cards = [];
  let check = 1;
  for (let i = 1; i <= n; i++) {
    cards.push(i);
  }

  while (cards.length > 1) {
    let next = [];
    for (let i = 0; i < cards.length; i++) {
      if (check === -1) {
        next.push(cards[i]);
      }
      check *= -1;
    }
    cards = next;
  }
  console.log(cards[0]);
};

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  solution(parseInt(line));
  rl.close();
});
