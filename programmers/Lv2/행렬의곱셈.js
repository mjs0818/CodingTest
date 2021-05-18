function solution(arr1, arr2) {
  var answer = [];

  // arr1의 행 갯수 만큼 반복
  for (let i = 0; i < arr1.length; i++) {
    let newArray = [];
    // arr1의 각 행 마다 arr2의 열 갯수 만큼 반복
    for (let j = 0; j < arr2[0].length; j++) {
      // arr1 i행의 모든 원소 * arr2 j열의 모든 원소
      let element = 0;
      for (let k = 0; k < arr1[i].length; k++) {
        element += arr1[i][k] * arr2[k][j];
      }
      newArray.push(element);
    }
    answer.push(newArray);
  }
  return answer;
}
