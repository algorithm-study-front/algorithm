/**
 * https://www.acmicpc.net/problem/9935
 */

// const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// let input = require("fs").readFileSync(path).toString().trim().split("\n");
// const [str, bombStr] = input;

function solution(str, bombStr) {
  const strArr = str.split("").reverse();
  const answer = [];

  strArr.forEach((char) => {
    answer.push(char);

    if (answer[answer.length - 1] === bombStr[0]) {
      let check = true;

      for (let i = 0; i < bombStr.length; i++) {
        if (answer[answer.length - i - 1] !== bombStr[i]) {
          check = false;
        }
      }

      if (check) {
        for (let j = 0; j < bombStr.length; j++) {
          answer.pop();
        }
      }
    }
  });

  return answer.reverse().join("");
}

console.log(solution("testestestC4setestC4C4", "C4"));
