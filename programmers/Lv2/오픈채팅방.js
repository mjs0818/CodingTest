function solution(record) {
  var answer = [];
  let user = {};
  let index = 0;
  record.forEach((el) => {
    let log = el.split(' ');
    if (log[0] === 'Enter') {
      // 이전에 들어온적 있는 경우
      if (user[log[1]]) {
        let update = user[log[1]].slice();
        update[0] = log[2];
        update.push(index);
        index++;
        user[log[1]] = update;
      }
      // 처음 들어온 경우
      else {
        user[log[1]] = [log[2], index];
        index++;
      }
    }
    if (log[0] === 'Leave') {
      let update = user[log[1]].slice();
      update.push(index);
      index++;
      user[log[1]] = update;
    }
    if (log[0] === 'Change') {
      user[log[1]][0] = log[2];
    }
  });
  for (let log in user) {
    let name = user[log][0];
    let state = user[log].slice(1);
    for (let i = 0; i < state.length; i++) {
      if (i % 2 === 0) {
        answer[state[i]] = `${name}님이 들어왔습니다.`;
      } else answer[state[i]] = `${name}님이 나갔습니다.`;
    }
  }

  return answer;
}

console.log(
  solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan'])
);
