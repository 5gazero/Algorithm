// 삼각형 판별하기

const solution = (a, b, c) => {
  let result = "YES", max;
  let tot = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (tot - max <= max) result = "NO";
  return result;
}