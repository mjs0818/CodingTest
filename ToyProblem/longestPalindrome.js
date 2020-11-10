const  longestPalindrome = function (array) {
  //TODO: 코드를 여기에 작성합니다.
  let string = array.split('');
  let reversed = string.slice().reverse();
  let length = 0;
  let result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string[i] === reversed[j]) {
        let start = i;
        let end = i;
        while (string[i] || reversed[j]) {
          if (string[i] !== reversed[j]) {
            break;
          } else {
            end++;
            i++;
            j++;
          }
        }
        if (length < end - start) {
          length = end - start;
          result = string.slice(start, end);
        }
        i = start;
      }
    }
  }
  return result.join('');
};
