/**
 * https://www.acmicpc.net/problem/10816
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [n, cardList, m, targetList] = require("fs").readFileSync(path).toString().trim().split("\n");

function solution(n, cardList, m, targetList) {
  const countMap = new Map();
  const answer = [];

  cardList.split(" ").forEach((card) => {
    const prevCount = countMap.get(card);

    if (prevCount) {
      countMap.set(card, prevCount + 1);
    } else {
      countMap.set(card, 1);
    }
  });

  targetList.split(" ").forEach((target) => {
    const count = countMap.get(target);

    if (count) {
      answer.push(count);
    } else {
      answer.push(0);
    }
  });

  return answer;
}

console.log(...solution(n, cardList, m, targetList));
