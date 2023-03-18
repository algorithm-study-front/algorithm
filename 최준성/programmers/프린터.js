function solution(priorities, location) {
  const position = Array.from(Array(priorities.length), (_, index) => index);
  const job = [...priorities];
  let count = 0;

  while (job.length) {
    if (job.slice(1).filter((prior) => prior > job[0]).length > 0) {
      job.push(job.shift());
      position.push(position.shift());
    } else {
      count++;
      if (position[0] === location) {
        return count;
      }
      job.shift();
      position.shift();
    }
  }
}

console.log(solution([2, 1, 3, 2], 2), solution([1, 1, 9, 1, 1, 1], 0));
