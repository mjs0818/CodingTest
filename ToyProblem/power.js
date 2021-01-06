function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if (exponent === 0) {
    return 1;
  }
  let half = parseInt(exponent / 2);
  let temp = power(base, half);
  let result = (temp * temp) % 1000000009;
  if (exponent % 2 === 1) {
    return (result * base) % 1000000009;
  } else {
    return result;
  }
}
