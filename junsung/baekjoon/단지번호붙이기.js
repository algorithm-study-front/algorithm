/**
 * https://www.acmicpc.net/problem/2667
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [n, ...cases] = input;

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(n, cases) {
  const matrix = cases.map((str) => str.split("").map((char) => Number(char)));
  const visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
  const queue = [];
  const countArr = [];

  const bfs = (i, j) => {
    queue.push([i, j]);
    visited[i][j] = true;
    let count = 1;

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const newX = dx[i] + x;
        const newY = dy[i] + y;

        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < n &&
          !visited[newX][newY] &&
          matrix[newX][newY] === 1
        ) {
          visited[newX][newY] = true;
          count++;
          queue.push([newX, newY]);
        }
      }
    }

    countArr.push(count);
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1 && !visited[i][j]) {
        bfs(i, j);
      }
    }
  }

  console.log(countArr.length);
  countArr
    .sort((a, b) => a - b)
    .forEach((count) => {
      console.log(count);
    });
}

solution(n, cases);
