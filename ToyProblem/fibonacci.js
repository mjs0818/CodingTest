const fibonacci = function (n) {
  // TODO: Your code here!
  const cache = [0, 1];
  const fibo = (n) => {
    if (cache[n] !== undefined) {
      return cache[n];
    } else {
      cache[n] = fibo(n - 1) + fibo(n - 2);
      return cache[n];
    }
  };
  return fibo(n);
};
