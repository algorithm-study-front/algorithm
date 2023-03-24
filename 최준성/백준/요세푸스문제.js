/**
 * https://www.acmicpc.net/problem/1158
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split("\n");
const [n, k] = input[0].split(" ");

function solution(n, k) {
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];

  let count = 0;
  while (queue.length) {
    const num = queue.shift();
    count++;

    if (count === k) {
      result.push(num);
      count = 0;
    } else {
      queue.push(num);
    }
  }

  return result;
}

const answer = solution(Number(n), Number(k));

console.log(`<${answer.join(", ")}>`);
