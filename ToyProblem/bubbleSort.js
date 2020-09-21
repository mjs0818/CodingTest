// i를 선언하여, 테스트를 원활하게 할 수 있습니다.
let i;

// 헬퍼 함수가 필요하다면 얼마든지 만들어서 사용하세요!

const bubbleSort = function(array) {
    // TODO: Your code here!
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length; j++){
        if(array[j] > array[j+1]){
          let temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp
        }
      }
    }
    return array;
  };

const advanced = function(array) {
  // TODO: Your code here!
  let swap;
  for(let i = 0; i < array.length; i++){
    swap = false;
    for(let j = 0; j < array.length; j++){
      if(array[j] > array[j+1]){
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        swap = true;
      }
    }
    if(!swap){
        break;
    }
  }
  return array;
};

const nightmare = function(array) {
    // TODO: Your code here!
    let swap;
    for(let i = 0; i < array.length; i++){
      swap = false;
      for(let j = 0; j < array.length - i - 1; j++){
        if(array[j] > array[j+1]){
          let temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
          swap = true;
        }
      }
      if(!swap){
          break;
      }
    }
    return array;
  };

// console.log(array);
// for(let i = 0; i < 1; i++){
//     let array = Array.from({length:10000},()=> Math.round((Math.random() * 10)));
//     //console.log(array);
//     console.time('bubbleSort');
//     let bubble = JSON.stringify(bubbleSort(array.slice()));
//     console.timeEnd('bubbleSort');
//     console.time('advanced');
//     let ad= JSON.stringify(advanced(array.slice()));
//     console.timeEnd('advanced');
//     console.time('nightmare');
//     let night = JSON.stringify(nightmare(array.slice()));
//     console.timeEnd('nightmare');
//     console.log(bubble === ad);
//     console.log(bubble === night);
// }

const x = 'outer scope';
(function() {
  console.log(x);
  const x = 'inner scope';
}());