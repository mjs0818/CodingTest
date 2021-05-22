function solution(clothes) {
  let answer = 0;
  let hash = clothes.reduce((acc, cur) => {
    if (acc[cur[1]]) acc[cur[1]] += 1;
    else acc[cur[1]] = 1;
    return acc;
  }, {});

  const aux = (pick, idx) => {
    if (idx === numberOfClothes.length) {
      if (pick.length) {
        answer += pick.reduce((acc, cur) => acc * cur);
      }
      return;
    }
    aux(pick.concat([numberOfClothes[idx]]), idx + 1);
    aux(pick, idx + 1);
  };

  let numberOfClothes = [];
  for (let clothes in hash) {
    numberOfClothes.push(hash[clothes]);
  }
  let count = 0;
  numberOfClothes.forEach((number) => {
    if (number === 1) count++;
  });

  if (count === numberOfClothes.length) {
    answer = Math.pow(2, count) - 1;
  } else aux([], 0);
  return answer;
}
