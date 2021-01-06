const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let sorted = arr.slice().sort((a, b) => a - b);
  let length = arr.length;
  let case1 = sorted[0] * sorted[1] * sorted[length - 1];
  let case2 = sorted[length - 1] * sorted[length - 2] * sorted[length - 3];
  return Math.max(case1, case2);
};
