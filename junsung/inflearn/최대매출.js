function solution(n, k, list) {
  let sum = 0,
    answer = 0;

  for (let i = 0; i < k; i++) {
    sum += list[i];
  }

  for (let right = k; right < n; right++) {
    sum = sum + list[right] - list[right - k];
    answer = Math.max(answer, sum);
  }

  return answer;
}

console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
