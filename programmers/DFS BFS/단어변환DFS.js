function solution(begin, target, words) {
  let answer = 51;
  if (!words.includes(target)) return 0;
  const convert = (now, next) => {
    now = now.split('');
    next = next.split('');
    let check = 0;
    now.forEach((ch, idx) => {
      if (ch !== next[idx]) {
        check++;
      }
    });

    return check === 1 ? true : false;
  };

  const bfs = (now, next, cnt) => {
    if (now === target) {
      answer = Math.min(answer, cnt);
      return;
    }
    for (let i = 0; i < next.length; i++) {
      if (convert(now, next[i])) {
        let nextWords = [...next];
        bfs(String(nextWords.splice(i, 1)), nextWords, cnt + 1);
      }
    }
  };
  bfs(begin, [...words], 0);
  return answer;
}
