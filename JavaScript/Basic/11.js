// 대문자 찾기

const solution = (str) => {
  let result = 0;
  for (let i of str) {
    //let num=i.charCodeAt();
    //if(num>=65 && num<=90) result++;
    if (i === i.toUpperCase()) result++;
  }

  return result;
};
