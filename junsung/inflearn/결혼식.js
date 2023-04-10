function solution(n, list) {
  let count = 0;
  let answer = 0;
  const timeline = [];

  list.forEach(([start, end]) => {
    timeline.push([start, "s"]);
    timeline.push([end, "e"]);
  });

  timeline.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].charCodeAt() - b[1].charCodeAt();
    } else {
      return a[0] - b[0];
    }
  });

  timeline.forEach(([time, type]) => {
    if (type === "s") {
      count++;
    } else {
      count--;
    }

    answer = Math.max(answer, count);
  });

  return answer;
}

console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
