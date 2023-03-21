/**
 * https://www.acmicpc.net/problem/2579
 */

function maxStairScore(stairs) {
  const n = stairs.length;
  if (n === 1) return stairs[0];

  let dp = new Array(stairs.length).fill(0);
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[0], stairs[1]) + stairs[2];

  for (let i = 3; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 2] + stairs[i], // 이전 계단을 밟지 않고 현재 계단을 밟는 경우
      dp[i - 3] + stairs[i - 1] + stairs[i] // 이전 계단을 밟고 현재 계단을 밟는 경우
    );
  }

  return dp[n - 1];
}

const scores = [10, 20, 15];
console.log(maxStairScore(scores));
