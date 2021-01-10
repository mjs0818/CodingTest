const rotateMatrix = function (matrix, rotation = 1) {
  // TODO: 여기에 코드를 작성합니다.
  rotation = rotation % 4;
  const rotate = (matrix) => {
    if (matrix.length === 0) {
      return [];
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    let newMatrix = new Array(cols);
    for (let i = 0; i < cols; i++) {
      newMatrix[i] = new Array(rows);
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        newMatrix[i][j] = matrix[rows - 1 - j][i];
      }
    }
    return newMatrix;
  };

  for (let i = 0; i < rotation; i++) {
    matrix = rotate(matrix);
  }
  return matrix;
};
