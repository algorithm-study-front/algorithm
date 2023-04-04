function solution(n, m) {
  const answer = [];

  const dfs = (result) => {
    if (result.length === m) {
      answer.push(result.join(" "));
      return;
    }

    for (let i = 1; i <= n; i++) {
      dfs([...result, i]);
    }
  };

  dfs([]);

  console.log(answer.join(" \n"));
}

// solution(3, 1),
console.log(solution(3, 3));
