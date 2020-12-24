const longestRun = function (string) {
  // TODO: 여기에 코드를 작성합니다.
  // let obj = {};
  // let longestChar = '';
  // let max = 0, count = 0;
  // let firstIndex, lastIndex;

  // if(string === ''){
  //   return [0,0];
  // }
  // for(let i = 0; i < string.length; i++){
  //   if(!obj[string[i]]){
  //     obj[string[i]] = 1;
  //   }else{
  //     obj[string[i]]++;
  //   }
  // }

  // for(prop in obj){
  //   if(obj[prop] > max){
  //     max = obj[prop];
  //     longestChar = prop;
  //   }
  // }

  // for(let i = 0; i < string.length; i++){
  //   if(string[i] === longestChar){
  //     if(firstIndex===undefined){
  //       firstIndex = i;
  //     }
  //     count++;
  //   }
  //   if(max === count){
  //     lastIndex = i;
  //     break;
  //   }
  // }

  // return [firstIndex, lastIndex];
  var currentCount = 1;
  var topCount = 0;
  var currentStart = 0;
  var topStart = 0;
  var topEnd = 0;
  var topRun = string[0];

  for (var i = 1; i < string.length; i++) {
    if (string[i] == string[i - 1]) {
      currentCount++;
      if (currentCount > topCount) {
        topCount = currentCount;
        topStart = currentStart;
        topEnd = i;
      }
    } else {
      currentCount = 1;
      currentStart = i;
    }
  }

  return [topStart, topEnd];
};

// 여러분들을 위해 무작위 문자열 생성기를 제공해 드리겠습니다!
// (해답을 작성하는 데 꼭 필요하진 않지만, 테스트할 때 유용할 것입니다)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

let string = randomString(30);
console.log(string);
console.log(longestRun(string));
