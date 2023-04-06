/**
 * https://www.acmicpc.net/problem/1937
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [n, ...cases] = input;

const dx = [0, -1, 0, 1];
const dy = [1, 0, -1, 0];

function solution(n, cases) {
  const matrix = cases.map((strList) => strList.split(" ").map((str) => Number(str)));
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => null));

  const dfs = (x, y) => {
    if (dp[x][y]) {
      return dp[x][y];
    }

    dp[x][y] = 1;

    for (let i = 0; i < 4; i++) {
      const newX = dx[i] + x;
      const newY = dy[i] + y;

      if (newX >= 0 && newX < n && newY >= 0 && newY < n && matrix[x][y] < matrix[newX][newY]) {
        dp[x][y] = Math.max(dp[x][y], dfs(newX, newY) + 1);
      }
    }

    return dp[x][y];
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (dp[i][j] === null) {
        dp[i][j] = dfs(i, j);
      }
    }
  }

  return Math.max(...dp.map((numList) => Math.max(...numList)));
}

console.log(solution(n, cases));
