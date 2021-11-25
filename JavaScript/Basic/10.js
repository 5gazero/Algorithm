// 문자 찾기

const solution = (s, t) => {
  let result = 0;
  for (let i of s) {
    if (i === t) result++;
  }
  return result;
};

const solution2 = (s, t) => {
  let result = s.split(t).length;
  return result - 1;
};
