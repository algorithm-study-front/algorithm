/**
 * https://www.acmicpc.net/problem/17413
 * 다시 풀어보기
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim();
const tags = input.match(/<[a-z ]+>/g) ?? [];
const words = input.split(/<[a-z ]+>/);

function solution(tags, words) {
  const reversedWords = words.map((word) =>
    word
      .split(" ")
      .map((v) => [...v].reverse().join(""))
      .join(" ")
  );

  const answer =
    tags.map((tag, i) => reversedWords[i] + tag).join("") + reversedWords[reversedWords.length - 1];
  return answer;
}

console.log(solution(tags, words));
