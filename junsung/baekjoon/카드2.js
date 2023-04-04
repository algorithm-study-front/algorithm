/**
 * https://www.acmicpc.net/problem/2164
 */
const path = "/dev/stdin";
const n = require("fs").readFileSync(path).toString().trim();

function solution(n) {
  const cards = Array.from({ length: n }, (_, index) => index + 1);

  while (cards.length > 1) {
    cards.shift();

    cards.push(cards.shift());
  }

  console.log(cards[0]);
}

solution(n);
