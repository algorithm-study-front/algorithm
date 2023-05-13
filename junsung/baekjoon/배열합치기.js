/**
 * https://www.acmicpc.net/problem/11728
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [line1, line2, line3] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(line1, line2, line3) {
  const [n, m] = line1.split(" ").map((str) => parseInt(str));
  const arr1 = line2
    .split(" ")
    .map((str) => parseInt(str))
    .sort((a, b) => a - b);
  const arr2 = line3
    .split(" ")
    .map((str) => parseInt(str))
    .sort((a, b) => a - b);
  const result = [];
  let i = 0,
    j = 0;

  while (i < n && j < m) {
    if (arr1[i] >= arr2[j]) {
      result.push(arr2[j++]);
    } else {
      result.push(arr1[i++]);
    }
  }

  while (i < n) {
    result.push(arr1[i++]);
  }

  while (j < m) {
    result.push(arr2[j++]);
  }

  return result.join(" ");
}

console.log(solution(line1, line2, line3));
