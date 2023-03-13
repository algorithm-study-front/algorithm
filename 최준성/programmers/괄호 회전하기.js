/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/76502
 */

const checkObj = {
  "]": "[",
  ")": "(",
  "}": "{",
};

const checkIsCorrect = (str) => {
  const stack = [];

  for (const element of str) {
    const checked = checkObj[element];

    if (!checked) {
      stack.push(element);
    } else if (stack.length === 0 && checked) {
      return false;
    } else if (checked === stack[stack.length - 1]) {
      stack.pop();
    }
  }

  return !(stack.length > 0);
};

function solution(s) {
  const str = s.split("");
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    str.push(str.shift());
    const checked = checkIsCorrect(str.join(""));

    if (checked) {
      count++;
    }
  }

  return count;
}

console.log(solution("[](){}"), solution("}]()[{"), solution("[)(]"), solution("}}}"));
