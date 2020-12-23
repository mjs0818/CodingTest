const powerSet = function (str) {
  // TODO: Your code here!
  str.split('');
  let subset = [];
  let result = [''];
  for(let i = 0; i < str.length; i++){
    if(!subset.includes(str[i])){
      result.push(str[i]);
      subset.push(str[i]);
      if(!result.includes(subset.sort().join(''))){
        result.push(subset.sort().join(''));
      }
    }
    for(let j = 0; j < str.length; j++){
      if(!subset.includes(str[j])){
        subset.push(str[j]);
        let arr = subset.slice();
        if(!result.includes(arr.sort().join(''))){
          result.push(arr.sort().join(''))
        }else{
          subset.pop();
        }
      } 
    }
    subset.shift();
  }
  return result;
};

console.log(powerSet('fun'));