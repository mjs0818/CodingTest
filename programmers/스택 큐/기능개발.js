function solution(progresses, speeds) {
  var answer = [];
  while (progresses.length !== 0) {
    let remain = 100 - progresses[0];
    let day = Math.ceil(remain / speeds[0]);
    progresses = progresses.map((el, i) => {
      return el + speeds[i] * day;
    });
    answer.push(0);
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      answer[answer.length - 1]++;
    }
  }
  return answer;
}
