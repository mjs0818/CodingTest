function solution(s) {
  var answer = 9999;
  if (s.length === 1) {
    return 1;
  }
  for (let i = 1; i <= s.length / 2; i++) {
    let compression = '';
    let str = s.slice(0, i);
    let count = 1;
    for (let j = i; j < s.length; j += i) {
      let next = s.slice(j, j + i);
      if (str === next) count++;
      else {
        compression += count > 1 ? count + str : str;
        str = next;
        count = 1;
      }
    }
    compression += count > 1 ? count + str : str;
    answer = Math.min(answer, compression.length);
  }
  return answer;
}
