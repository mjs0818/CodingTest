const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let leftIdx = 0,
    rightIdx = 0;

  while (k > 0) {
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
      rightStep = cnt;

    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    if (cnt > arr1.length - leftIdx) leftIdxStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;

    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};