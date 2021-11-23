// 일곱난쟁이

const solution = (arr) => {
  let result = arr;
  let sum = result.reduce((a, b) => a + b, 0);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (result[i] + result[j]) === 100) {
        result.splice(j, 1);
        result.splice(i, 1);
      }
    }
  }
  return result;
};
