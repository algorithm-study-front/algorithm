function checkAnargram(str, target) {
  const strMap = new Map();

  for (let i = 0; i < str.length; i++) {
    const prev = strMap.get(str[i]);

    if (prev) {
      strMap.set(str[i], prev + 1);
    } else {
      strMap.set(str[i], 1);
    }
  }

  for (let i = 0; i < target.length; i++) {
    const count = strMap.get(target[i]);

    if (!count) {
      return false;
    }

    strMap.set(target[i], count - 1);
  }

  return true;
}

function solution(S, T) {
  const answer = [];
  const len = T.length;
  let left = 0;
  let right = 0;
  let tempStr = "";

  while (right < S.length) {
    tempStr += S[right];

    if (tempStr.length < T.length) {
      right++;
    } else if (tempStr.length > T.length) {
      tempStr = tempStr.substring(1);
    }

    if (tempStr.length === T.length) {
      const isAnargram = checkAnargram(tempStr, T);

      if (isAnargram) {
        answer.push(tempStr);
      }
      right++;
    }
  }

  return answer.length;
}

console.log(solution("bacaAacba", "abc"));
