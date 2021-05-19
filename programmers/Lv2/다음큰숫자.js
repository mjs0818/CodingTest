function solution(n) {
  let current = numberOfOne(n);
  while (true) {
    n++;
    if (current === numberOfOne(n)) {
      break;
    }
  }
  return n;
}

const numberOfOne = (n) => {
  let count = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] === '1') count++;
  }
  return count;
};
