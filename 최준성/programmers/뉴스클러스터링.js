/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/17677
 */

function getMultipleSets(str) {
  const strArr = str.split("");
  const sets = [];
  const regex = new RegExp(/^[a-zA-Z]*$/);

  for (let i = 0; i < str.length - 1; i++) {
    const ch1 = strArr[i];
    const ch2 = strArr[i + 1];

    if (regex.test(ch1) && regex.test(ch2)) {
      sets.push((ch1 + ch2).toLowerCase());
    }
  }

  return sets;
}

function solution(str1, str2) {
  const map1 = getMultipleSets(str1);
  const len1 = map1.length;
  const map2 = getMultipleSets(str2);
  const len2 = map2.length;

  const intersection = [];

  map1.forEach((ch) => {
    const findedIdx = map2.indexOf(ch);
    if (findedIdx !== -1) {
      intersection.push(map2[findedIdx]);
      map2[findedIdx] = null;
    }
  });

  if (intersection.length === 0 && len1 + len2 - intersection.length === 0) {
    return 65536;
  }

  return Math.floor((intersection.length / (len1 + len2 - intersection.length)) * 65536);
}

console.log(
  solution("FRANCE", "french"),
  solution("handshake", "shake hands"),
  solution("aa1+aa2", "AAAA12"),
  solution("E=M*C^2", "e=m*c^2"),
  solution("abab", "baba")
);
