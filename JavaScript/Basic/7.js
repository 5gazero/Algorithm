// 10부제

const solution = (day, arr) => {
  let result = 0;
  for (let i of arr) {
    if (i % 10 === day) result++;
  }
  return result;
}