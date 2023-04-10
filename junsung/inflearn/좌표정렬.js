function solution(n, list) {
  list.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let endTime = 0;
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    const [start, end] = list[i];

    if (endTime <= start) {
      endTime = end;
      count++;
    }
  }

  return count;
}

console.log(
  solution(5, [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ]),
  solution(3, [
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
