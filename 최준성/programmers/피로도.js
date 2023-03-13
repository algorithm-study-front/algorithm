/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/87946
 */

function solution(k, dungeons) {
  let answer = 0;
  const len = dungeons.length;
  const visited = Array.from({ length: len }, () => false);

  const dfs = (fatigue, count) => {
    for (let i = 0; i < len; i++) {
      if (!visited[i] && fatigue >= dungeons[i][0]) {
        visited[i] = true;
        dfs(fatigue - dungeons[i][1], count + 1);
        visited[i] = false;
      }
    }

    answer = Math.max(answer, count);
  };

  dfs(k, 0);
  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
