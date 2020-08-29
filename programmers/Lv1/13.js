function solution(array, commands) {
  let answer = [];
  commands.forEach(element => {
    let arr = array.slice(element[0]-1, element[1])
    .sort((a,b)=>{return a-b});
    answer.push(arr[element[2]-1]);      
  });
  
  return answer;
}
