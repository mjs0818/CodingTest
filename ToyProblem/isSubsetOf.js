const isSubsetOf = function (base, sample) {
  let baseIndex = 0;
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  const findItem = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

  for (let i = 0; i < sample.length; i++) {
    baseIndex = findItem(sample[i], base, baseIndex);
    if (baseIndex === -1) {
      return false;
    }
  }
  return true;
};
