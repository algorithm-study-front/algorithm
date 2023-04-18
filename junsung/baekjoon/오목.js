/**
 * https://www.acmicpc.net/problem/2615
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [...matrix] = require("fs").readFileSync(path).toString().trim().split("\n");
matrix = matrix.map((row) => row.split(" ").map((col) => Number(col)));
const queue = [];
const dx = [0, 1, 1, -1];
const dy = [1, 0, 1, 1];
let answer = 0;

const bfs = (i, j, target) => {};

function solution(matrix) {
  let target = 0;
  let find = false;

  for (let x = 0; x < 19; x++) {
    for (let y = 0; y < 19; y++) {
      if (matrix[x][y] !== 0) {
        target = matrix[x][y];

        for (let i = 0; i < 4; i++) {
          let count = 1;

          let newX = dx[i] + x;
          let newY = dy[i] + y;

          while (
            newX >= 0 &&
            newX < 19 &&
            newY >= 0 &&
            newY < 19 &&
            matrix[newX][newY] === target
          ) {
            count++;

            if (count === 5) {
              if (
                x - dx[i] >= 0 &&
                x - dx[i] < 19 &&
                y - dy[i] >= 0 &&
                y - dy[i] < 19 &&
                matrix[x - dx[i]][y - dy[i]] === target
              ) {
                break;
              }

              if (
                newX + dx[i] >= 0 &&
                newX + dx[i] < 19 &&
                newY + dy[i] >= 0 &&
                newY + dy[i] < 19 &&
                matrix[newX + dx[i]][newY + dy[i]] == target
              ) {
                break;
              }

              console.log(target);
              console.log(x + 1, y + 1);
              find = true;
            }

            newX += dx[i];
            newY += dy[i];
          }
        }
      }
    }
  }

  if (!find) {
    console.log(0);
  }
}

solution(matrix);
