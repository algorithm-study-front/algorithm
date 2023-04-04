const solution = (n, words) => {
  const check = {};
  let count = 0;

  for (let i = 0; i < words.length; i++) {
    if ((i + 1) % n === 1) {
      count++;
    }

    if (!check[words[i]]) {
      check[words[i]] = true;

      if (i > 0 && words[i][0] !== words[i - 1].slice(-1)) {
        return [(i + 1) % n || n, count];
      }
    } else {
      return [(i + 1) % n || n, count];
    }
  }

  return [0, 0];
};

console.log(
  solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]),
  solution(5, [
    "hello",
    "observe",
    "effect",
    "take",
    "either",
    "recognize",
    "encourage",
    "ensure",
    "establish",
    "hang",
    "gather",
    "refer",
    "reference",
    "estimate",
    "executive",
  ]),
  solution(2, ["hello", "one", "even", "never", "now", "world", "draw"])
);
