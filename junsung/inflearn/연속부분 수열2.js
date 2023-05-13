function solution(arr, m) {
  let left = 0,
    sum = 0,
    answer = 0;

  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];

    while (sum > m) {
      sum -= arr[left++];
    }

    answer += right - left + 1;
  }

  return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5));
