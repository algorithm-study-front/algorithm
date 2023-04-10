/**
 * https://www.acmicpc.net/problem/2003
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [line1, line2] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(line1, line2) {
  const [n, m] = line1.split(" ").map((str) => Number(str));
  const list = line2.split(" ").map((str) => Number(str));

  let left = 0,
    right = 0,
    sum = 0,
    count = 0;

  while (right < n) {
    sum += list[right];

    while (sum > m) {
      sum -= list[left++];
    }

    if (sum === m) {
      count++;
    }

    right++;
  }

  return count;
}

console.log(solution(line1, line2));
