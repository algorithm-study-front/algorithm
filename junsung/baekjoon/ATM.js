/**
 * https://www.acmicpc.net/problem/11399
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, inputs] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(n, inputs) {
  const list = inputs.split(" ").map((str) => Number(str));
  const listMap = list.map((num, index) => [num, index + 1]);

  listMap.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }

    return a[0] - b[0];
  });

  let result = [];
  const sum = listMap.reduce((prev, cur) => {
    result.push(prev);
    return prev + cur[0];
  }, 0);
  result.push(sum);

  return result.reduce((prev, cur) => prev + cur);
}

console.log(solution(n, inputs));
