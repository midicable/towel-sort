
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arguments.length) {
    return [];
  }
  let numbers = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      numbers.push(...(matrix[i].sort( (a, b) => a - b )));
    } else {
      numbers.push(...(matrix[i].sort( (a, b) => b - a )));
    }
  }
  return numbers;
}
