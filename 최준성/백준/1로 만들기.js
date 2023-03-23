/**
 * https://www.acmicpc.net/problem/1463
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }

  return dp[n];
}

console.log(solution(n));
