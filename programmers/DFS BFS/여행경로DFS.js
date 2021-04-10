function solution(tickets) {
  var answer = [];
  const bfs = (cur, next, visit) => {
    if (!next.length) {
      answer.push(visit);
      return;
    }
    for (let i = 0; i < next.length; i++) {
      if (cur === next[i][0]) {
        let nextTickets = [...next];
        nextTickets.splice(i, 1);
        let nextVisit = [...visit];
        nextVisit.push(next[i][1]);
        bfs(next[i][1], nextTickets, nextvisit);
      }
    }
  };

  bfs('ICN', [...tickets], ['ICN']);
  answer = answer.sort();
  return answer[0];
}
