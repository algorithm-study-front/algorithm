/**
 * https://www.acmicpc.net/problem/11726
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [n] = input;

function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);

  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n] % 10007;
}

console.log(solution(n));
