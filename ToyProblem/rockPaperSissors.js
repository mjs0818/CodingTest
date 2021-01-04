const rockPaperScissors = function (count) {
  let n = count || 3;
  let rps = ['rock', 'paper', 'scissors'];
  let array = [];
  let result = [];

  function recursion(n, array) {
    debugger;
    if (n === 0) {
      result.push(array);
      return;
    }
    for (let i = 0; i < rps.length; i++) {
      recursion(n - 1, array.concat(rps[i]));
    }
  }

  recursion(n, array);
  return result;
};
