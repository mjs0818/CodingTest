function solution(jobs) {
  let remain = jobs.sort((a, b) => a[0] - b[0]);
  let now = jobs[0][0];
  let queue = [];
  let answer = 0;
  let idx = 0;
  while (idx < jobs.length || queue.length) {
    while (idx < jobs.length && jobs[idx][0] <= now) {
      queue.push(jobs[idx]);
      idx++;
    }
    if (queue.length === 0) now = jobs[idx][0];
    if (queue.length) {
      queue.sort((a, b) => a[1] - b[1]);
      let processed = queue.shift();
      now += processed[1];
      answer += now - processed[0];
    }
  }
  return Math.floor(answer / jobs.length);
}
