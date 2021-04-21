function solution(s) {
  var answer = true;
  const stack = [s[0]];
  for (let i = 1; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
}
