module.exports = function towelSort(matrix) {
  const result = [];
  if (!matrix || matrix.length === 0) {
    return [];
  }

  const newResult = matrix.map((row, index) => {
    // [...row] создает копию, чтобы reverse() не ломал исходную матрицу
    return index % 2 !== 0 ? [...row].reverse() : row;
  });

  return result.concat(...newResult);
};
