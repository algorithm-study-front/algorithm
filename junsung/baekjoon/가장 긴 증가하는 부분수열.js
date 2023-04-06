/**
 * https://www.acmicpc.net/problem/1937
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [n, ...inputs] = input;

function solution(n, inputs) {
  const list = inputs[0].split(" ").map((char) => Number(char));
  const dp = Array.from({ length: n }, () => 0);

  dp[0] = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (list[i] > list[j]) {
        max = Math.max(dp[j], max);
      }
    }

    dp[i] = max + 1;
  }

  return Math.max(...dp);
}

console.log(solution(n, inputs));
