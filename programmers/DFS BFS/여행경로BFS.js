function solution(tickets) {
  var answer;
  const isVisited = Array(tickets.length).fill(false);
  const Q = [['ICN', ['ICN'], isVisited]];

  while (Q.length) {
    const [cur, path, isVisited] = Q.shift();
    if (path.length === tickets.length + 1) {
      answer = answer || path;
      if (answer > path) {
        answer = path;
      }
    }
    let next = '';
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i][0] === cur && !isVisited[i] && next !== tickets[i][1]) {
        next = tickets[i][1];
        let nextPath = [...path];
        isVisited[i] = true;
        nextPath.push(next);
        Q.push([next, nextPath, [...isVisited]]);
        isVisited[i] = false;
      }
    }
  }

  return answer;
}
