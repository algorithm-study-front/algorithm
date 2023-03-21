function solution(n) {
  const dy = Array.from({ length: n + 1 }, () => 0);

  dy[0] = 1;
  dy[1] = 2;

  for (let i = 2; i <= n; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  return dy[n];
}

console.log(solution(7));
