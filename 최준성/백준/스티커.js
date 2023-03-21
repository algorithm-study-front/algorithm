/**
 * https://www.acmicpc.net/problem/9465
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [tc, ...cases] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(tc, cases) {
  for (let i = 0; i < tc; i++) {
    const n = cases[i * 3];
    const line1 = cases[i * 3 + 1].split(" ").map(Number);
    const line2 = cases[i * 3 + 2].split(" ").map(Number);

    const dp = [[...line1], [...line2]];

    dp[0][1] += dp[1][0];
    dp[1][1] += dp[0][0];

    for (let k = 2; k < n; k++) {
      dp[0][k] = Math.max(dp[1][k - 1], dp[1][k - 2]) + dp[0][k];
      dp[1][k] = Math.max(dp[0][k - 1], dp[0][k - 2]) + dp[1][k];
    }

    console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
  }
}

solution(tc, cases);
