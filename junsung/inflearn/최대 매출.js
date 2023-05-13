function solution(list, m) {
  let left = 0,
    right = m - 1,
    sum = 0,
    maxSum = 0;

  for (let i = 0; i < m; i++) {
    sum += list[i];
  }
  maxSum = sum;

  while (right < list.length - 1) {
    sum += list[++right];
    sum -= list[left++];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
}

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3));
