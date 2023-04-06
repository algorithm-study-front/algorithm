/**
 * https://www.acmicpc.net/problem/2163
 */

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(path).toString().trim().split(" ");
const [n, m] = input;

function solution(n, m) {
  let answer = 0;

  if (n * m === 1) {
    return 0;
  }

  const dfs = (choco, depth) => {
    answer += 2 ** depth;

    if (choco <= 2) {
      return;
    }

    const mok = choco / 2;
    const remain = choco % 2;

    if (remain === 0) {
      dfs(mok, depth + 1);
    } else {
      dfs(mok, depth);
    }
  };

  dfs(n * m, 0);

  return answer;
}

console.log(solution(Number(n), Number(m)));
