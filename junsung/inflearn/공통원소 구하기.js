function solution(list1, list2) {
  let i = 0;
  let j = 0;
  list1.sort();
  list2.sort();
  const answer = [];

  while (i < list1.length && j < list2.length) {
    if (list1[i] > list2[j]) {
      j++;
    } else if (list1[i] < list2[j]) {
      i++;
    } else {
      answer.push(list1[i]);
      i++;
      j++;
    }
  }

  return answer;
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
