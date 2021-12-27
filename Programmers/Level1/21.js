// 자연수 뒤집어 배열로 만들기

const solution = (n) => {
  let answer = [];
  do {
    answer.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  return answer;
};
