let fs = require("fs");

let [N, M] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

function solution(n, m) {
  const visited = Array.from({ length: n + 1 }, () => false);

  const dfs = (result, check) => {
    if (result.length === m) {
      console.log(...result);
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (!visited[i] && !check[i]) {
        visited[i] = true;
        check[i] = true;
        result.push(i);
        dfs(result, [...check]);
        result.pop();
        visited[i] = false;
      }
    }
  };

  dfs([], [...visited]);
}

console.log(solution(4, 2));
