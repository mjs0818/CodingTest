const bubbleSort = function (arr) {
  let swap;
  for (let i = 0; i < arr.length; i++) {
    swap = 0;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap++;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (swap === 0) {
      break;
    }
  }
  return arr;
};
