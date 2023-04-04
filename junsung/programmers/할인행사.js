/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/131127
 */

function solution(want, number, discount) {
  const collections = {};
  let count = 0;

  for (let i = 0; i < want.length; i++) {
    const productKey = want[i];
    if (collections[productKey]) {
      collections[productKey] += number[i];
    } else {
      collections[productKey] = number[i];
    }
  }

  for (let i = 0; i < discount.length - 9; i++) {
    const check = {
      ...collections,
    };

    for (let j = i; j < 10 + i; j++) {
      check[discount[j]] -= 1;
    }

    const checked = Object.values(check).filter((value) => value === 0);
    if (checked.length === want.length) {
      count++;
    }
  }

  return count;
}

console.log(
  solution(
    ["banana", "apple", "rice", "pork", "pot"],
    [3, 2, 2, 2, 1],
    [
      "chicken",
      "apple",
      "apple",
      "banana",
      "rice",
      "apple",
      "pork",
      "banana",
      "pork",
      "rice",
      "pot",
      "banana",
      "apple",
      "banana",
    ]
  ),
  solution(
    ["apple"],
    [10],
    [
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
      "banana",
    ]
  )
);
