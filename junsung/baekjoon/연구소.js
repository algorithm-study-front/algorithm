/**
 * https://www.acmicpc.net/problem/14502
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [line1, ...inputs] = require("fs").readFileSync(path).toString().trim().split("\n");

const [n, m] = line1.split(" ");
const maps = inputs.map((str) => str.split(" ").map((strNum) => Number(strNum)));
const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
let queue = [];
const wallXY = [];
let tempMaps = [];
let count = 0;
let answer = 0;

const bfs = (i, j) => {
  queue.push([i, j]);
  let index = 0;

  while (index < queue.length) {
    const [x, y] = queue[index];

    for (let i = 0; i < 4; i++) {
      const newX = x + dx[i];
      const newY = y + dy[i];

      if (newX >= 0 && newX < n && newY >= 0 && newY < m && tempMaps[newX][newY] === 0) {
        tempMaps[newX][newY] = 2;
        queue.push([newX, newY]);
      }
    }
    index++;
  }
};

const dfs = (x, y, selected) => {
  visited[x][y] = true;

  if (selected.length === 3) {
    wallXY.push(selected);
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 0 && !visited[i][j]) {
        dfs(i, j, [...selected, [i, j]]);
        visited[i][j] = false;
      }
    }
  }
};

function solution(n, m, maps) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === 0) {
        dfs(i, j, [[i, j]]);
      }
    }
  }

  wallXY.forEach((wall) => {
    tempMaps = maps.map((nums) => [...nums]);
    for (let i = 0; i < 3; i++) {
      const [x, y] = wall[i];
      tempMaps[x][y] = 1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tempMaps[i][j] === 2) {
          bfs(i, j, []);
          queue = [];
        }
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (tempMaps[i][j] === 0) {
          count++;
        }
      }
    }

    answer = Math.max(answer, count);
    count = 0;
  });

  return answer;
}

console.log(solution(n, m, maps));
