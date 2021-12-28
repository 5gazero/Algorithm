// 정수 제곱근 판별

const solution = (n) => {
  let sqrt = Math.sqrt(n);
  return sqrt % 1 === 0 ? (sqrt + 1) ** 2 : -1;
};
