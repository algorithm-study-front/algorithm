function solution(str) {
  const stack = [];

  for (const element of str) {
    stack.push(element);

    if (element === ")") {
      while (stack[stack.length - 1] !== "(") {
        stack.pop();
      }
      stack.pop();
    }
  }
  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
