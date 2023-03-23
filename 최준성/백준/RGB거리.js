/**
 * https://www.acmicpc.net/problem/1149
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, ...cases] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(n, cases) {
  const dp = cases.map((nums) => nums.split(" ").map((str) => Number(str)));

  for (let i = 1; i < dp.length; i++) {
    dp[i][0] += Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] += Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] += Math.min(dp[i - 1][0], dp[i - 1][1]);
  }

  return Math.min(...dp[dp.length - 1]);
}

console.log(solution(n, cases));
