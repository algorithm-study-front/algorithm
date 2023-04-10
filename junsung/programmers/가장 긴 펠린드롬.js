/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/12904?language=javascript
 */
function solution(s) {
  const len = s.length;
  let answer = 0;
  const dp = Array.from({ length: len }, () => Array.from({ length: len }, () => false));

  for (let i = 0; i < len; i++) {
    answer = 1;
    dp[i][i] = true;
  }

  for (let i = 0; i < len - 1; i++) {
    if (s[i] === s[i + 1]) {
      answer = 2;
      dp[i][i + 1] = true;
    }
  }

  for (i = 3; i <= len; i++) {
    for (let start = 0; start <= len - i; start++) {
      const end = start + i - 1;

      if (s[start] === s[end] && dp[start + 1][end - 1]) {
        dp[start][end] = true;
        answer = Math.max(answer, i);
      }
    }
  }

  return answer;
}

console.log(solution("abcdcba"));
