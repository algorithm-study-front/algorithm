/**
 * https://www.acmicpc.net/problem/2504s
 */
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [inputs] = require("fs").readFileSync(path).toString().trim().split("\n");

const BRACKETS_VALUES = {
  "(": 2,
  "[": 3,
};

function solution(inputs) {
  const stack = [];

  for (const char of inputs) {
    if (char === "(" || char == "[") {
      stack.push(char);
    } else if (char === ")") {
      if (stack[stack.length - 1] === "(") {
        stack.push(BRACKETS_VALUES[stack.pop()]);
      } else if (stack.length < 2) {
        return 0;
      } else if (typeof stack[stack.length - 1] === "number") {
        const num = stack.pop();
        const bracket = stack.pop();

        if (bracket === "[") {
          return 0;
        }

        stack.push(num * bracket);
      } else if (stack[stack.length - 1] === "[") {
        return 0;
      }
    } else if (char === "]") {
      if (stack[stack.length - 1] === "[") {
        stack.push(BRACKETS_VALUES[stack.pop()]);
      } else if (stack.length < 2) {
        return 0;
      } else if (typeof stack[stack.length - 1] === "number") {
        const num = stack.pop();
        const bracket = stack.pop();

        if (bracket === "(") {
          return 0;
        }

        stack.push(num * bracket);
      } else if (stack[stack.length - 1] === "(") {
        return 0;
      }
    } else {
      return 0;
    }

    if (
      typeof stack[stack.length - 1] === "number" &&
      typeof stack[stack.length - 2] === "number"
    ) {
      stack.push(stack.pop() + stack.pop());
    }
  }

  if (stack.length === 1 && typeof stack[0] === "number") {
    return stack[0];
  }

  return 0;
}

console.log(solution(inputs));
