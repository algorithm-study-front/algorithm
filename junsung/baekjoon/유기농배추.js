/**
 * https://www.acmicpc.net/problem/1012
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let fsInputs = require("fs").readFileSync(path).toString().trim().split("\n");
let [tc, ...inputs] = fsInputs;
inputs = inputs.map((input) => input.split(" ").map((e) => Number(e)));

const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];

function solution(tc, inputs) {
  let inputsIndex = 0;
  for (let i = 0; i < tc; i++) {
    const [n, m, k] = inputs[inputsIndex];
    const cases = inputs.slice(1, k + 1);
    let count = 0;
    inputsIndex = k + 1;

    const farm = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    cases.forEach((testCase) => {
      const [n, m] = testCase;
      farm[m][n] = 1;
    });

    const bfs = (x, y) => {
      const queue = [[x, y]];

      while (queue.length) {
        const [x, y] = queue.shift();
        farm[x][y] = 0;

        for (let i = 0; i < 4; i++) {
          const newX = dx[i] + x;
          const newY = dy[i] + y;

          if (newX >= 0 && newY >= 0 && newX <= m && newY <= n && farm[newX][newY] === 1) {
            queue.push([newX, newY]);
          }
        }
      }
    };

    for (let i = 0; i < farm.length; i++) {
      for (let j = 0; j < farm[i].length; j++) {
        if (farm[i][j] === 1) {
          bfs(i, j);
          count++;
        }
      }
    }

    console.log(count);
  }
}

solution(tc, inputs);
