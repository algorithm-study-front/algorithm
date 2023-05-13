function solution(arr, m) {
  const answer = [];
  let i = 0,
    j = 0;
  let sum = arr[0];

  while (i < arr.length && j < arr.length) {
    if (sum >= m) {
      sum -= arr[j++];
    } else {
      sum += arr[++i];
    }

    if (sum === m) {
      console.log(i, j);
      const tempArr = arr.slice(j, i + 1);
      answer.push(tempArr);
    }
  }

  console.log(answer);
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 1], 6));
