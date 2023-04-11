function solution(str1, str2) {
  const str1Map = new Map();
  const str2Map = new Map();
  let answer = true;

  for (let i = 0; i < str1.length; i++) {
    if (str1Map.has(str1[i])) {
      str1Map.set(str1[i], str1Map.get(str1[i]) + 1);
    } else {
      str1Map.set(str1[i], 1);
    }

    if (str2Map.has(str2[i])) {
      str2Map.set(str2[i], str2Map.get(str2[i]) + 1);
    } else {
      str2Map.set(str2[i], 1);
    }
  }

  [...str1Map].forEach(([char, count]) => {
    const result = str2Map.get(char);
    if (!result || result !== count) {
      answer = false;
    }
  });

  return answer;
}

console.log(solution("abaCC", "Caaab"));
