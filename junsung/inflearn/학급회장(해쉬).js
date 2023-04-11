function solution(n, str) {
  const resultMap = new Map();

  str.split("").forEach((char) => {
    const prev = resultMap.get(char);

    prev ? resultMap.set(char, prev + 1) : resultMap.set(char, 1);
  });

  const result = [...resultMap].sort((a, b) => b[1] - a[1]);

  return result[0][0];
}

console.log(solution(15, "BACBACCACCBDEDE"));
