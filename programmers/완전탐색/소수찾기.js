function solution(numbers) {
  var answer = [];
  const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  };

  const permutation = (numbers, len) => {
    const aux = (str, population) => {
      if (str.length === len) {
        if (isPrime(Number(str))) {
          answer.push(Number(str));
        }
      }

      for (let i = 0; i < population.length; i++) {
        aux(str + population[i], population.replace(population[i], ''));
      }
    };
    aux('', numbers);
  };

  for (let i = 1; i <= numbers.length; i++) {
    permutation(numbers, i);
  }

  let set = new Set(answer);
  let array = [...set];
  return array.length;
}
