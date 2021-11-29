// 가장 긴 문자열

const solution = (str) => {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let i of str) {
    if (i.length > max) {
      max = i.length;
      answer = i;
    }
  }

  return answer;
};
