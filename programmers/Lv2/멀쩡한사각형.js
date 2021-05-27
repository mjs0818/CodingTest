const gcd = (a, b) => {
  if (a % b === 0) return b;
  else return gcd(b, a % b);
};

function solution(w, h) {
  let answer = w * h;
  let cut = 0;
  // 정사각형
  if (w === h) {
    return answer - w;
  }

  // 직사각형
  let count = gcd(w, h);
  if (count === 1) {
    // 쪼갤수 없을 때
    cut = h + w - 1;
  } else {
    // 쪼갤 수 있을 때
    cut = w + h - count;
  }
  return answer - cut;
}
