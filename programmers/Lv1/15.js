function solution(participant, completion) {
  participant = participant.sort((a,b)=>{
    return a > b ? 1 : -1;
  })    
  completion = completion.sort((a,b)=>{
    return a > b ? 1 : -1;
  })

  for(let i = 0; i < participant.length; i++){
    if(participant[i] !== completion[i]){
        return String(participant[i])
    }
  }
}