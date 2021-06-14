function solution(n, times) {
  /* 
    입국심사 수도코드
    1. 가장 오래 걸리는 심사관이 한번 심사가 끝날 때 총 몇명이 끝나는지 계산 
    let sorted = times.sort()
    let longest = times[마지막인덱스]
    let pass = sorted.reduce(acc,time => acc+(longest / time))
    
    2. 1에서 구한 값을 기준으로 모든 사람이 통과하기 위한 근사값 계산
    let low = Math.floor(n / pass) * longest
    let high = Math.ceil(n / pass) * longest
    
    3. low와 high를 기준으로 이분탐색
    let mid = low - high 중간값
    while(low < high)
      let count = 0;
      for(i = 0 to times.length-1)
        count += Math.floor(mid / times[i])
      if(count = n) return mid
      else if(count > n) low,mid 변경
      else high, mid 변경
    */

  let sorted = times.sort((a, b) => a - b);
  let longest = times[times.length - 1];
  let pass = sorted.reduce((acc, time) => acc + longest / time, 0);

  // 이분탐색 횟수를 줄이려고 low와 high값을 구했는데 별로 의미 없었음
  // let low = Math.floor(n / pass) * longest;
  // let high = (Math.ceil(n / pass) + 1) * longest;

  let low = 0;
  let high = longest * n;
  let answer;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let count = 0;
    for (let i = 0; i < times.length; i++) {
      count += Math.floor(mid / times[i]);
    }

    // count가 n이랑 같을 때와 count가 더 클때의 경우를 따로하니까 테스트 통과가 안됬음. 이유를 모르겠다
    /*
        if(count === n) {
          answer = mid;
          high = mid - 1;
        }else if (count > n) {
          high = mid - 1;
        }
        */

    if (count >= n) {
      answer = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return answer;
}
