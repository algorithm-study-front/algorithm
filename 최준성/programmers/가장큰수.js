function solution(numbers) {
  const len = numbers.length;
  const result = [];
  const visited = Array.from({ length: len }, () => false);

  const dfs = (count, numStr) => {
    if (count === len) {
      result.push(numStr);
      return;
    }

    for (let i = 0; i < len; i++) {
      if (!visited[i]) {
        visited[i] = true;
        dfs(count + 1, numStr + numbers[i]);
        visited[i] = false;
      }
    }
  };

  dfs(0, "");

  return String(Math.max(Number(Math.max(...result))));
}

console.log(
  solution([6, 10, 2]),
  solution([3, 30, 34, 5, 9]),
  solution([1000, 999]),
  solution([101, 10]),
  solution([232, 23]),
  solution([101, 10, 232, 23])
);
