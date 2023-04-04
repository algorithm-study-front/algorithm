function solution(brown, yellow) {
  const total = brown + yellow;

  for (let height = 3; height <= total / height; height++) {
    if (total % height === 0) {
      const width = total / height;
      return [width, height];
    }
  }
}

console.log(solution(10, 2), solution(8, 1), solution(24, 24));
