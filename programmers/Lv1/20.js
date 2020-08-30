function solution(s) {
  let answer = [];
  let stringToArray = s.split(' ');
  stringToArray.map(element => {
    let string = '';
    for(let i = 0; i < element.length; i++){
      if(i % 2 === 0){
        string += element[i].toUpperCase();
      }
      else{
        string += element[i].toLowerCase();
      }
    }
    answer.push(string);    
  });

    answer = answer.join(' ');
    
    return answer;
}
solution('try hello world');