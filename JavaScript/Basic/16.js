// 중복문자 제거

const solution = (str) => {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }
  return answer;
};
