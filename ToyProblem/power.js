function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  if (exponent === 0) {
    return 1
  }

  if (exponent === 1) {
    return base
  }

  let result = power(base, Math.floor(exponent / 2))
  result = (result * result) % 1000000009
  if (exponent % 2 === 1) {
    return (result * base) % 1000000009
  } else {
    return result
  }
}
