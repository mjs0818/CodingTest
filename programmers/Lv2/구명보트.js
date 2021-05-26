function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => b - a);
  let lt = 0;
  let rt = people.length - 1;
  while (lt <= rt) {
    if (lt === rt) {
      answer++;
      break;
    }
    if (people[lt] + people[rt] <= limit) {
      lt++;
      rt--;
    } else {
      lt++;
    }
    answer++;
  }

  return answer;
}
