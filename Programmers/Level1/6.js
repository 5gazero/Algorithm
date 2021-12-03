// x만큼 간격이 있는 n개의 숫자

const solution = (x, n) => {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(i * x);
  }
  return answer;
};
