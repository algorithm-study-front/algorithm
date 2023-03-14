let fs = require("fs");

let [N, M] = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

const visited = Array.from({ length: N + 1 }, () => false);

const dfs = (result) => {
  if (result.length === M) {
    console.log(...result);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(i);
      dfs(result);
      result.pop();
      visited[i] = false;
    }
  }
};

dfs([]);
