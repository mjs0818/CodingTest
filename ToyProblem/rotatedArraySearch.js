const rotatedArraySearch = function (rotated, target) {
  // TODO : 여기에 코드를 작성합니다.
  let left = 0,
    right = rotated.length - 1;
  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    if (rotated[mid] === target) {
      return mid;
    }
    if (rotated[mid] < target) {
      if (rotated[right] < target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (rotated[left] > target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
