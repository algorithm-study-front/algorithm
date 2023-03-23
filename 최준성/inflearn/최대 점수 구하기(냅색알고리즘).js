function solution(limit, arr) {
  const dp = Array.from({ length: limit + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    const [score, time] = arr[i];

    for (let j = limit; j >= time; j--) {
      dp[j] = Math.max(dp[j - time] + score, dp[j]);
    }
  }
  return dp[dp.length - 1];
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
