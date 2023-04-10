/**
 * https://www.acmicpc.net/problem/11047
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [line1, ...inputs] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(line1, inputs) {
  let [n, k] = line1.split(" ").map((str) => Number(str));
  const list = inputs.map((str) => Number(str));
  let count = 0;

  for (let i = list.length - 1; i >= 0; i--) {
    const result = parseInt(k / list[i]);
    const remain = k % list[i];

    if (result >= 1) {
      count += result;
      k = remain;
    }
  }

  return count;
}

console.log(solution(line1, inputs));
