function solution(n) {
  let answer = 0;
  let prime = [];
  for(let i = 0; i <= n; i++){
    prime.push(1);
  }

  for(let i = 2; i <= n; i++){
      if(prime[i] === 0){
        continue;
      }
      
      for(let j = i * 2; j <= n; j += i){
        prime[j] = 0;
      }
  }
  
  for(let i = 2; i <= n; i++){
    if(prime[i] === 1){
        answer++;
    }
  }
  return answer;
}
