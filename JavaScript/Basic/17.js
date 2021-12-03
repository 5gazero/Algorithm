// 중복단어 제거

const solution = (str) => {
  let answer;
  answer = str.filter((v, i) => {
    if (str.indexOf(v) === i) return v;
  });

  return answer;
};
