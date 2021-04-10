function solution(begin, target, words) {
  const isVisited = Array(words.length).fill(false);
  const Q = [[begin, 0]];
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

  if (!words.includes(target)) {
    return 0;
  }
  while (Q.length) {
    let [now, cnt] = Q.shift();
    if (now === target) {
      return cnt;
    }
    for (let i = 0; i < words.length; i++) {
      if (convert(now, words[i]) && !isVisited[i]) {
        Q.push([words[i], ++cnt]);
        isVisited[i] = true;
      }
    }
  }

  return 0;
}
