var letterCombinations = function (digits) {
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  letters = letters.split('');
  let mapping = {};
  let tmp;
  let answer = [];
  if (digits === '') return [];
  for (let i = 2; i <= 9; i++) {
    if (i === 7 || i === 9) {
      tmp = letters.splice(0, 4);
    } else {
      tmp = letters.splice(0, 3);
    }
    let obj = { [i]: tmp };
    mapping = { ...mapping, ...obj };
  }

  let mappingOfDigit = [];
  for (let i = 0; i < digits.length; i++) {
    mappingOfDigit.push(mapping[digits[i]]);
  }

  const bfs = (cur, letter, idx) => {
    if (idx === digits.length) {
      answer.push(letter);
      return;
    }

    for (let i = 0; i < cur.length; i++) {
      let next = letter + cur[i];
      bfs(mappingOfDigit[idx + 1], next, idx + 1);
    }
  };
  bfs(mappingOfDigit[0], '', 0);
  //   console.log(mappingOfDigit);
  return answer;
};

console.log(letterCombinations(''));
