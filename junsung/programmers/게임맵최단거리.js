function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;
  const dx = [0, -1, 0, 1];
  const dy = [-1, 0, 1, 0];
  const visited = Array.from({ length: n }, () => Array.from({ length: m }, () => false));
  const queue = [[0, 0, 1]];

  const bfs = () => {
    visited[0][0] = true;

    while (queue.length) {
      const [x, y, count] = queue.shift();

      if (x === n - 1 && y === m - 1) {
        return count;
      }

      for (let i = 0; i < 4; i++) {
        const newX = x + dx[i];
        const newY = y + dy[i];

        if (
          newX >= 0 &&
          newX < n &&
          newY >= 0 &&
          newY < m &&
          !visited[newX][newY] &&
          maps[newX][newY] === 1
        ) {
          queue.push([newX, newY, count + 1]);
          visited[newX][newY] = true;
        }
      }
    }
  };

  return bfs() || -1;
}
