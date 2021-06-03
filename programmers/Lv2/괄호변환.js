function solution(p) {
  /*
    수도코드
    문자열 p를 분리 => split(p) = u(균형잡힌 괄호), v(나머지 괄호)
    if(u = 올바른 괄호) 
      return u + split(v)
    else {
      next = '(' + split(v) + ')';
      u = u.slice(1, u.length - 1);
      u = u.map(el => {
        el === '(' ? ')' : '('
      });
      next = next+u;
      return next
    }
    */

  // 올바른 괄호 판별 함수
  const isCorrect = (p) => {
    let stack = [];
    for (let i = 0; i < p.length; i++) {
      if (p[i] === '(') stack.push(p[i]);
      else {
        if (!stack.length) return false;
        stack.pop();
      }
    }
    return !stack.length;
  };

  // 괄호 분리 함수
  const split = (w) => {
    if (w === '') return '';
    let u = '',
      v = '';
    let open = 0,
      close = 0,
      index = 0;
    while (open !== close || index === 0) {
      u += w[index];
      if (w[index] === '(') open++;
      else close++;
      index++;
    }
    if (index < w.length) v = w.slice(index, w.length);
    if (isCorrect(u)) {
      return u + split(v);
    } else {
      let next = '(' + split(v) + ')';
      u = u
        .split('')
        .slice(1, u.length - 1)
        .map((el) => (el === '(' ? ')' : '('))
        .join('');
      return next + u;
    }
  };

  if (isCorrect(p)) return p;
  return split(p);
}
