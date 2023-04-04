/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const matrix = grid.map((cell) => cell.map((num) => num));
  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array.from(
    { length: m },
    () => Array.from({ length: n }),
    () => false
  );
  const queue = [];
  let result = 0;

  const bfs = () => {
    let resultMin = -1;

    while (queue.length) {
      const [x, y, minute] = queue.shift();
      matrix[x][y] = 2;
      visited[x][y] = true;
      resultMin = minute;

      for (let i = 0; i < 4; i++) {
        const newX = dx[i] + x;
        const newY = dy[i] + y;

        if (
          newX >= 0 &&
          newX < m &&
          newY >= 0 &&
          !visited[newX][newY] &&
          newY < n &&
          matrix[newX][newY] === 1
        ) {
          queue.push([newX, newY, minute + 1]);
        }
      }
    }

    return resultMin;
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  if (queue.length !== 0) {
    result = bfs();
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        return -1;
      }
    }
  }

  return result;
};

console.log(
  orangesRotting([
    [2, 2],
    [1, 1],
    [0, 0],
    [2, 0],
  ])
);
