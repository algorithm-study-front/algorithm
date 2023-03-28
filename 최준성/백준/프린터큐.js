/**
 * https://www.acmicpc.net/problem/1966
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [tc, ...cases] = input;

function solution(tc, cases) {
  for (let i = 0; i < tc; i++) {
    const [n, target] = cases[i * 2].split(" ").map((str) => Number(str));
    const printer = cases[i * 2 + 1].split(" ").map((str, index) => [Number(str), index]);
    let count = 0;

    while (printer.length) {
      const [job, index] = printer[0];

      const finded = printer.slice(1).findIndex((element) => element[0] > job);

      if (finded !== -1) {
        printer.push(printer.shift());
      } else {
        printer.shift();
        count++;

        if (index === target) {
          console.log(count);
          break;
        }
      }
    }
  }
}

solution(tc, cases);
