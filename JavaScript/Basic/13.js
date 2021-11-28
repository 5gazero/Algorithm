// 대소문자 변환

const solution = (str) => {
  let result = "";
  for (let i of str) {
    if (i === i.toUpperCase()) result += i.toLowerCase();
    else result += i.toUpperCase();
  }
  return result;
};
