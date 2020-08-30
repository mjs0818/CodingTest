function solution(s, n) {
    var answer = '';
    
    for(let i = 0; i < s.length; i++){
      if(s[i] === ' '){
        answer += s[i];
        continue;
      }
      let code = s[i].charCodeAt();
      if(code<=90){
        code = (code + n > 90) ? 64 + (code + n - 90) : code + n;
      }
      else{
        code = (code + n > 122) ? 96 + (code + n - 122) : code + n;
      }
      answer += String.fromCharCode(code);
    }
    return answer;
}
console.log(solution('z', 1));

