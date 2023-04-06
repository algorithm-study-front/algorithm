function solution(str) {
  let check = "YES";

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
      check = "NO";
    }
  }

  return check;
}

console.log(solution("gooG"));
