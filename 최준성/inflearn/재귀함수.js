function solution(n) {
  const dfs = (n) => {
    if (n === 0) {
      return;
    }

    dfs(parseInt(n / 2));
    console.log(n % 2);
  };

  dfs(n);
}

console.log(solution(11));
