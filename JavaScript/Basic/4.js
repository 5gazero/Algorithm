// 1부터 n까지 합 출력

const solution = (n) => {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i
  }
  return result;
}