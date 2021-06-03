function solution(s) {
  /*
    수도코드
    x = 0
    for i = 0 to s.length - 1 
      if(s = 올바른 괄호) x++;
      s = s.slice(1) + s[0];
    */
  let x = 0;
  const isCorrect = (s) => {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i]);
      else {
        if (s[i] === ')' && stack[stack.length - 1] === '(') stack.pop();
        else if (s[i] === ']' && stack[stack.length - 1] === '[') stack.pop();
        else if (s[i] === '}' && stack[stack.length - 1] === '{') stack.pop();
        else return false;
      }
    }
    return !stack.length;
  };

  for (let i = 0; i < s.length - 1; i++) {
    if (isCorrect(s)) x++;
    s = s.slice(1) + s[0];
  }
  return x;
}
