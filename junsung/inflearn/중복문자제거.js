function solution(str) {
  return [...new Set(str)].join("");
}

console.log(solution("ksekkset"));
