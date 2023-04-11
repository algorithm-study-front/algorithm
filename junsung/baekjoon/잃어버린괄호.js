/**
 * https://www.acmicpc.net/problem/1541
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [inputs] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(inputs) {
  const arr = inputs.split("-").map((str) => {
    return str
      .split("+")
      .map((str) => Number(str))
      .reduce((prev, cur) => prev + cur);
  });

  if (arr.length > 1) {
    return arr.reduce((prev, cur) => prev - cur);
  } else {
    return arr[0];
  }
}

console.log(solution(inputs));
