const insertionSort = function (arr, callback = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  let sorted = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (callback(sorted[i - 1]) <= callback(arr[i])) {
      sorted.push(arr[i]);
    } else {
      for (let j = 0; j < i; j++) {
        if (callback(sorted[j]) >= callback(arr[i])) {
          let left = sorted.slice(0, j);
          let right = sorted.slice(j);
          sorted = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return sorted;
};
