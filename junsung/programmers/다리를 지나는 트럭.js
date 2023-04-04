function solution(bridge_length, weight, truck_weights) {
  const queue = Array.from({ length: bridge_length }, () => 0);
  let time = 0;
  const sum = (q) => q.reduce((prev, cur) => prev + cur);

  while (queue.length) {
    time++;
    queue.shift();

    if (truck_weights.length !== 0) {
      if (sum(queue) + truck_weights[0] <= weight) {
        queue.push(truck_weights.shift());
      } else {
        queue.push(0);
      }
    }
  }

  return time;
}

console.log(
  solution(2, 10, [7, 4, 5, 6])
  // solution(100, 100, [10]),
  // solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])
);
