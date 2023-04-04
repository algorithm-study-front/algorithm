/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/42586
 */

const calcDeployJobs = (arr) => {
  let count = 1;
  const target = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= target) {
      count++;
    } else {
      break;
    }
  }

  return count;
};

function solution(progresses, speeds) {
  const answer = [];
  const restDays = progresses.map((job, index) => {
    const days = 100 - job;

    const rest = days % speeds[index];
    const mok = Math.floor(days / speeds[index]);

    if (rest > 0) {
      return mok + 1;
    }

    return mok;
  });

  while (restDays.length) {
    const count = calcDeployJobs(restDays);
    answer.push(count);
    restDays.splice(0, count);
  }

  return answer;
}

console.log(
  solution([93, 30, 55], [1, 30, 5]),
  solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])
);
