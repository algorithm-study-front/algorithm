function solution(N, number) {
  const use = Array.from(new Array(9), () => new Set());

  if (N == number) {
    return 1;
  } else {
    use.forEach((element, index) => {
      if (index !== 0) element.add(Number(String(N).repeat(index)));
    });
    console.log("use[0]:", use[2]);

    for (let i = 1; i <= 8; ++i) {
      for (let j = 1; j < i; ++j) {
        for (const first of use[j]) {
          for (const second of use[i - j]) {
            use[i].add(first + second);
            use[i].add(first - second);
            use[i].add(first * second);
            use[i].add(first / second);
          }
          console.log("use[i]:", use[i]);
        }
      }
      if (use[i].has(number)) return i;
    }
    return -1;
  }
}

console.log(solution(5, 12));
