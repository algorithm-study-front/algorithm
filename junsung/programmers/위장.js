const combination = (n, r) => {
  if (n === r || r === 0) {
    return 1;
  }

  return combination(n - 1, r - 1) + combination(n - 1, r);
};

function solution(clothes) {
  let answer = 1;
  const obj = {};
  for (let arr of clothes) {
    obj[arr[1]] = (obj[arr[1]] || 0) + 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}

console.log(
  solution([
    ["yellow_hat", "headgear"],
    ["blue_sunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ]),
  solution([
    ["crow_mask", "face"],
    ["blue_sunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
