let tiling = function (n) {
  // TODO: 여기에 코드를 작성합니다.
  let cache = [0, 1, 2];
  const subTiling = (n) => {
    if (cache[n] !== undefined) return cache[n];
    else {
      cache[n] = subTiling(n - 1) + subTiling(n - 2);
      return cache[n];
    }
  };
  return subTiling(n);
};
