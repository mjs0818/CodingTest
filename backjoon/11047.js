const solution = (coins, money) => {
  let result = 0;
  for (let i = 0; i < coins.length; i++) {
    let count = 0;
    count = Math.floor(money / coins[i]);
    money = money % coins[i];
    result += count;
  }
  console.log(result);
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const input = [];
rl.on('line', function (line){
  input.push(line);
}).on('close', function (){
  const [coin, money] = input.shift().split(' ').map(el => Number(el));
  const coins = [];
  for(let i = 0; i < coin; i++) {
    coins.push(Number(input[coin - 1 - i]));
  }
  solution(coins, money);
})