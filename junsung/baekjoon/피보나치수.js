/**
 * https://www.acmicpc.net/problem/10870
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(n) {
  const dp = Array(20).fill(0);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= 20; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(solution(n));
