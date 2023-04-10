function solution(n, m, list) {
  let sum = 0,
    left = 0,
    answer = 0;

  for (let right = 0; right < n; right++) {
    sum += list[right];

    while (sum > m) {
      sum -= list[left++];
    }

    answer += right - left + 1;
  }

  return answer;
}

console.log(solution(5, 5, [1, 3, 1, 2, 3]));
