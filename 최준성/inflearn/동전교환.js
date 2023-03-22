function solution(n, coins, m) {
  const dp = Array.from({ length: m + 1 }, () => 9999);
  dp[0] = 0;

  for (const coin of coins) {
    for (let j = coin; j <= m; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }

  return dp[dp.length - 1];
}

console.log(solution(3, [1, 2, 5], 15));
