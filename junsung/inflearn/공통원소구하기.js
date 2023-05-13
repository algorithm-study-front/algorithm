function solution(A, B) {
  A.sort();
  B.sort();
  const answer = [];
  let i = 0,
    j = 0;

  while (i < A.length && j < B.length) {
    if (A[i] > B[j]) {
      j++;
    } else if (A[i] < B[j]) {
      i++;
    } else {
      answer.push(A[i]);
      i++;
      j++;
    }
  }

  console.log("test", answer);
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
