function solution(n, lost, reserve) {
  let student = Array.from({length:n+1},()=>1);
  let count = 0;
  reserve.forEach(el=>{
      student[el] += 1;
  });
  lost.forEach(el=>{
      student[el] -= 1;
  })
  
  for(let i = 1; i < student.length; i++){
      if(student[i] === 0){
          if(student[i-1] === 2) {
              student[i-1] -= 1;
              student[i] += 1;
          }else if(student[i+1] ===2){
              student[i+1] -= 1;
              student[i] += 1;
          }
      }

      if(student[i]!=0){
          count++;
      }
  }
  
  return count;
}
