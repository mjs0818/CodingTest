function solution(A, B) {
  var answer = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    answer += A[i] * B[B.length - 1 - i];
  }
  return answer;
}
