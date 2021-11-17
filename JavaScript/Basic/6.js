// 홀수

const solution = (arr) => {
  let result = [];
  let sum = 0;
  let min = 1000;
  for (let i of arr) {
    if (i % 2 === 1) {
      sum += i;
      if (i < min) min = i;
    }
    result.push(sum);
    result.push(min);
    return result;
  }
};
