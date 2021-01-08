const quickSort = function (arr, callback = (item) => item) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[0];
  let left = [],
    right = [];
  for (let i = 1; i < arr.length; i++) {
    if (callback(arr[i]) <= callback(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  left = quickSort(left);
  right = quickSort(right);
  return left.concat(pivot, right);
};
