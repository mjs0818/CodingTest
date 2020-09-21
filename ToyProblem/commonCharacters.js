const commonCharacters = function(string1, string2) {
    // TODO: Your code here!
    let result = [];
    let str = arguments[0];
    str = str.split('');
    str.forEach(el=>{
      let check = true;
      for(let i = 1; i < arguments.length; i++){
        if(!arguments[i].includes(el)){
          check = false;
        }
      }
      if(check && el !== ' ' && !result.includes(el)){
        result.push(el);
      }
    });
    result = result.join('');
    return result;
  };
  