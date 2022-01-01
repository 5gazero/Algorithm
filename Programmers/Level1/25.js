// 두 정수 사이의 합

const solution = (a, b) => {
  let answer = 0;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) answer += i;
  return answer;
};

const solution2 = (a, b) => {
  // 가우스 공식
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
};
