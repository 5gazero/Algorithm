// 세 수 중 최소값

const solution = (a, b, c) => {
  let result;
  if (a > b) result = b;
  else result = a;
  if (result > c) result = c;
  else result = result;
  return result;
}
