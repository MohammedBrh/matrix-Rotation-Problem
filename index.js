// run `node index.js` in the terminal
let matrix = [
  [1, 2, 3, 4, 5, 6, 7, 8],
  [9, 10, 11, 12, 13, 14, 15, 16],
  [17, 18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 31, 32],
  [33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48],
  [49, 50, 51, 52, 53, 54, 55, 56],
  [57, 58, 59, 60, 61, 62, 63, 64],
  [65, 66, 67, 68, 69, 70, 71, 72],
  [73, 74, 75, 76, 77, 78, 79, 80],
];
// let matrix = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];
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
    for (let k = 0; k <= Math.ceil((2 * (m + n - 2)) / (l + 1)); k++) {
      console.log('#####', l, (2 * (m + n - 2)) / (l + 1));
      if (step == 0 && j + 1 < m - l) {
        // console.log(' °°° 1', i, j, matrix[i][j + 1]);
        newMatrixTemp[i][j] = matrix[i][j + 1];
        j++;
        if (j == m - l - 1) step++;
      } else if (step == 1 && i + 1 < n - l) {
        // console.log(' °°° 2', i, j, matrix[i + 1][j]);
        newMatrixTemp[i][j] = matrix[i + 1][j];
        i++;
        if (i == n - l - 1) step++;
      } else if (step == 2 && j > 0) {
        // console.log(' °°° 3', i, j, matrix[i][j - 1]);
        newMatrixTemp[i][j] = matrix[i][j - 1];
        j--;
        if (j - l == 0) step++;
      } else if (step == 3 && i > 0) {
        newMatrixTemp[i][j] = matrix[i - 1][j];
        // console.log(' °°° ', i, j, matrix[i - 1][j]);
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
console.log(result);
