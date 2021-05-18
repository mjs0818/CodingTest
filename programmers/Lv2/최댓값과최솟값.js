function solution(s) {
  let numbers = s.split(' ').map((n) => Number(n));
  let min = Math.min(...numbers);
  let max = Math.max(...numbers);
  return `${min} ${max}`;
}
