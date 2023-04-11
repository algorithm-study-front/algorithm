/**
 * https://www.acmicpc.net/problem/7576
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [line1, ...inputs] = require("fs").readFileSync(path).toString().trim().split("\n");
const [m, n] = line1.split(" ");
const boxes = inputs.map((str) => str.split(" ").map((num) => Number(num)));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
const queue = [];
let answer = 0;

function solution(m, n, boxes) {
  const bfs = () => {
    let index = 0;

    while (index < queue.length) {
      const [x, y, days] = queue[index];
      answer = days;

      for (let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];

        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < m &&
          boxes[newX][newY] === 0 &&
          boxes[newX][newY] !== -1
        ) {
          boxes[newX][newY] = 1;
          queue.push([newX, newY, days + 1]);
        }
      }
      index++;
    }
  };

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (boxes[i][j] === 1) {
        queue.push([i, j, 0]);
      }
    }
  }

  bfs();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (boxes[i][j] === 0) {
        return -1;
      }
    }
  }

  return answer;
}

console.log(solution(m, n, boxes));
