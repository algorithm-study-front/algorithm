/**
 * https://www.acmicpc.net/problem/9095
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...inputs] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(input) {
  const dp = Array(input).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i < 11; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  return dp[input];
}

for (let i = 0; i < n; i++) {
  console.log(solution(inputs[i]));
}
