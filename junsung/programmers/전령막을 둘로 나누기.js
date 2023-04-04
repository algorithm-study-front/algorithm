/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/86971
 */

function solution(n, wires) {
  let answer = 99999;

  const bfs = (adj, visited, start) => {
    let count = 0;
    const queue = [];

    queue.push(start);
    while (queue.length) {
      const v = queue.shift();

      if (!visited[v]) {
        visited[v] = true;
        count++;

        for (const e of adj[v]) {
          if (!visited[e]) {
            queue.push(e);
          }
        }
      }
    }

    return count;
  };

  for (let i = 0; i < wires.length; i++) {
    let visited = Array.from({ length: n + 1 }, () => false);
    let adj = Array.from({ length: n + 1 }, () => []);
    const countArr = [];
    const cutTarget = i;

    for (let j = 0; j < wires.length; j++) {
      const [start, end] = wires[j];

      if (cutTarget === j) {
        continue;
      } else {
        adj[start].push(end);
        adj[end].push(start);
      }
    }

    countArr.push(bfs(adj, visited, 1));

    for (let k = 1; k < visited.length; k++) {
      if (!visited[k] && countArr.length === 1) {
        countArr.push(bfs(adj, visited, k));
      }
    }

    answer = Math.min(answer, Math.abs(countArr[0] - countArr[1]));
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ]),
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ]),
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
