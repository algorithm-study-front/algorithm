/**
 * https://www.acmicpc.net/problem/2606
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
let [n, k, ...arr] = input;
arr = arr.map((nums) => nums.split(" ").map((num) => Number(num)));

function solution(n, k, arr) {
  const visited = Array.from({ length: n + 1 }, () => false);
  const adj = Array.from({ length: n + 1 }, () => []);
  let count = -1;

  arr.forEach(([u, v]) => {
    adj[u].push(v);
    adj[v].push(u);
  });

  const dfs = (v) => {
    visited[v] = true;
    count++;

    for (const e of adj[v]) {
      if (!visited[e]) {
        dfs(e);
      }
    }
  };

  dfs(1);

  return count;
}

console.log(solution(n, k, arr));
