function solution(numbers) {
  let answer = numbers
    .map((el) => el + '')
    .sort((a, b) => b + a - (a + b))
    .join('');
}
