/**
 * https://www.acmicpc.net/problem/1932
 */

const fs = require("fs");
const readFileSyncAddress = "input.txt";
let input = fs.readFileSync(readFileSyncAddress).toString().trim().split("\n");
[n, ...arr] = input;
n = Number(n);
arr = arr.map((i) => i.split(" ").map((i) => Number(i)));

// function solution(n, dp) {
//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < dp[i].length; j++) {
//       if (j === 0) {
//         dp[i][j] += dp[i - 1][j];
//       } else if (j === dp[i].length - 1) {
//         dp[i][j] += dp[i - 1][j - 1];
//       } else {
//         dp[i][j] += Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
//       }
//     }
//   }
//   return Math.max(...dp[n - 1]);
// }

// console.log(solution(n, dp));

function solution(n, arr) {
  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] += Math.max(arr[i + 1][j], arr[i + 1][j + 1]);
    }
  }

  return arr[0][0];
}

console.log(solution(n, arr));
