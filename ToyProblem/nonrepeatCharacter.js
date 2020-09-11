const firstNonRepeatedCharacter = function(string) {
    // TODO: Your code here!
    debugger;
    let arr = string.split('');
    return arr.find((el,i) =>{
        return i !==0 && el !== arr[i-1];
    });

  };
  
  console.log(firstNonRepeatedCharacter('AABCABD'));