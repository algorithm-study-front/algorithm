function solution(n, m, list) {
  let sum = 0;
  let left = 0;
  let right = 0;
  let count = 0;

  while (right < n) {
    sum += list[right];
    if (sum === m) {
      count++;
    }

    while (sum >= m) {
      sum -= list[left++];

      if (sum === m) {
        count++;
      }
    }

    right++;
  }

  return count;
}

console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
