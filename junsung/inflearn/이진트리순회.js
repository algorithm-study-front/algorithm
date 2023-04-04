function solution(n) {
  const dfs = (n) => {
    if (n > 7) {
      return;
    }

    dfs(n * 2);
    dfs(n * 2 + 1);
  };

  dfs(n);
}

console.log(solution(1));
