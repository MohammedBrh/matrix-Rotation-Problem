// run `node index.js` in the terminal
// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
let matrix = [
  [1, 2, 3, 4, 5, 6],
  [7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30],
];
// let matrix = [
//   [1, 2, 3, 4],
//   [7, 8, 9, 10],
//   [13, 14, 15, 16],
//   [19, 20, 21, 22],
//   [25, 26, 27, 28],
// ];
// Write your code here
const n = matrix.length;
const m = matrix[0].length;
let newMatrix = Array(n);
for (let ind = 0; ind < n; ind++) {
  newMatrix[ind] = Array(m);
}
for (let o = 0; o < 1; o++) {
  let newMatrixTemp = Array(n);
  for (let ind = 0; ind < n; ind++) {
    newMatrixTemp[ind] = Array(m);
  }
  for (let l = 0; l <= Math.ceil(m / 2); l++) {
    let step = 0;
    let i = l;
    let j = i;
    console.log(
      '------------------',
      // 2 * (m + n - 2),
      // 2 * (m + n - 2 - 2 * l),
      // Math.ceil(n / 2)
      2 * (n + m - 2 - 4 * l),
      '|||',
      m,
      n,
      i,
      j
      // step
    );
    for (let k = 0; k < 2 * (n + m - 2 - 4 * l); k++) {
      console.log(
        step,
        '#####',
        k,
        ' |',
        i,
        '|',
        j,
        '||',
        i + 1,
        '<',
        m - l,
        i + 1 < n - l
      );
      if (step == 0 && j + 1 < m - l) {
        console.log(' °°° 1', i, j, matrix[i][j + 1]);
        newMatrixTemp[i][j] = matrix[i][j + 1];
        j++;
        if (j == m - l - 1) {
          step++;
        }
      } else if (step == 1 && i + 1 < n - l) {
        console.log(' °°° 2', i, j, matrix[i + 1][j]);
        newMatrixTemp[i][j] = matrix[i + 1][j];
        i++;
        if (i == n - l - 1) step++;
      } else if (step == 2 && j > 0) {
        console.log(' °°° 3', i, j, matrix[i][j - 1]);
        newMatrixTemp[i][j] = matrix[i][j - 1];
        j--;
        console.log(step, ' °°°°', j, ' ==', l, '--', j == l);
        if (j == l) step++;
      } else if (step == 3 && i > 0) {
        newMatrixTemp[i][j] = matrix[i - 1][j];
        console.log(' °°° ', i, j, matrix[i - 1][j]);
        i--;
      }
    }
  }
  newMatrix = newMatrixTemp;
  matrix = newMatrix;
}

let result = '';
matrix.forEach((el) => {
  result += el.join(' ') + '\n';
});
console.log('matrix:', matrix);
console.log(result);
