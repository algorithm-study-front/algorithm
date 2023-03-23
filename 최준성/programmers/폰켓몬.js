function solution(nums) {
  const obj = {};
  let total = 0;

  nums.forEach((num) => {
    if (obj[num]) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
    total++;
  });

  const len = Object.keys(obj).length;
  const selectCount = Math.floor(total / 2);

  return len >= selectCount ? selectCount : len;
}

console.log(solution([3, 1, 2, 3]), solution([3, 3, 3, 2, 2, 4]), solution([3, 3, 3, 2, 2, 2]));
