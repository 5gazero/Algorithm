// 점수 계산

const solution = (arr) => {
  let answer = 0;
  let count = 0;
  for (let i of arr) {
    if (i === 1) {
      count++;
      answer += count;
    } else count = 0;
  }

  return answer;
};
