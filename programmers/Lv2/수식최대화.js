const calc = (exp1, exp2, op) => {
  if (op === '*') return +exp1 * +exp2;
  if (op === '+') return +exp1 + +exp2;
  if (op === '-') return +exp1 - +exp2;
};

const split = (exp, op) => {
  return exp.split(op);
};

function solution(expression) {
  var answer = 0;
  let operator = [];
  const aux = (op, soFar) => {
    if (soFar.length === 3) {
      operator.push(soFar);
      return;
    }
    for (let i = 0; i < op.length; i++) {
      let next = op.slice();
      next.splice(i, 1);
      aux(next, soFar.concat(op[i]));
    }
  };
  aux(['*', '+', '-'], []);

  operator.forEach((op) => {
    let splited = split(expression, op[0]);

    let result = splited.map((el) => {
      let splited = split(el, op[1]);
      let result = splited.map((el) => {
        let splited = split(el, op[2]);

        if (splited.length === 1) return splited[0];
        else return splited.reduce((acc, cur) => calc(acc, cur, op[2]));
      });
      if (result.length === 1) return result[0];
      else return result.reduce((acc, cur) => calc(acc, cur, op[1]));
    });
    answer = Math.max(answer, Math.abs(result.reduce((acc, cur) => calc(acc, cur, op[0]))));
  });
  return answer;
}
