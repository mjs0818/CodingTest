function solution(land) {
  let start = [land[0][0], land[0][1], land[0][2], land[0][3]];
  for (let i = 1; i < land.length; i++) {
    let next = [];
    next[0] = land[i][0] + Math.max(start[1], start[2], start[3]);
    next[1] = land[i][1] + Math.max(start[0], start[2], start[3]);
    next[2] = land[i][2] + Math.max(start[0], start[1], start[3]);
    next[3] = land[i][3] + Math.max(start[0], start[1], start[2]);
    start = [...next];
  }
  return Math.max(...start);
}
