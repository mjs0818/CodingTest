function solution(n, edge) {
  var answer = 0;
  const Q = [[1, 0]];
  const isVisited = Array(n + 1).fill(false);
  isVisited[1] = true;
  const distance = Array(n + 1).fill(0);
  while (Q.length) {
    const [node, dist] = Q.shift();
    for (let i = 0; i < edge.length; i++) {
      if (node === edge[i][0] && !isVisited[edge[i][1]]) {
        let next = edge[i][1];
        isVisited[next] = true;
        distance[next] = dist + 1;
        Q.push([next, dist + 1]);
      } else if (node === edge[i][1] && !isVisited[edge[i][0]]) {
        let next = edge[i][0];
        isVisited[next] = true;
        distance[next] = dist + 1;
        Q.push([next, dist + 1]);
      }
    }
  }
  let max = Math.max(...distance);
  return distance.filter((el) => el === max).length;
}
