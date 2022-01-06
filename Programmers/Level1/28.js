// 나누어 떨어지는 숫자 배열

const solution = (arr, divisor) => {
  const filtered = arr.filter((i) => i % divisor === 0);
  return filtered.length ? filtered.sort((a, b) => a - b) : [-1];
};
