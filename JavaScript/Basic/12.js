// 대문로 통일

const solution = (str) => {
  let result = "";
  for (let i of str) {
    let num = i.charCodeAt();
    if (num >= 97 && num <= 122) result += String.fromCharCode(num - 32);
    else result += i;

    // if (i === i.toLowerCase()) result += i.toUpperCase();
    // else result += i;
  }

  return result;
};
