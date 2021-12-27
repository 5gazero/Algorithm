// 제일 작은 수 제거하기

const solution = (arr) => {
  if (arr.length <= 1) return [-1];

  let min = Math.min(...arr);
  let idx = arr.indexOf(min);

  arr.splice(idx, 1);
  return arr;
};
