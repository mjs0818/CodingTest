var testingTransform = function (array) {
  var transform = [];

  for (var i = 0; i < array.length; i++)
    transform.push({
      value: array[i],
      i: i
    });

  return transform;
};

var insertionSort = function (array, callback) {
  // TODO: 코드를 여기에 작성합니다.
  if (!callback) {
    for (let i = 0; i < array.length; i++) {
      for (j = i - 1; j >= 0; j--) {
        if (array[i].value < array[j].value) {
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
          i--;
        }
      }
    }
  }else{
    for (let i = 0; i < array.length; i++) {
      for (j = i - 1; j >= 0; j--) {
        if (callback(array[i], array[j]) < 0) {
          let temp = array[j];
          array[j] = array[i];
          array[i] = temp;
          i--;
        }
      }
    }
  }
  return array;
};

// let array = [{ value: 1, i: 0 },
// { value: 2, i: 2 },
// { value: 43, i: 3 },
// { value: 21, i: 4 },
// { value: 100, i: 1 }]
let array = testingTransform([0,1,2,3,4,5]);
console.log(insertionSort([0,1,2,3,4,5], function(a,b){
  var aIsOdd = a & 1;
  var bIsOdd = b & 1;

  return aIsOdd - bIsOdd;
}));