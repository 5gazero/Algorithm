// A를 #으로

const solution = (s) => {
  let result = "";
  for (let i of s) {
    if (i === "A") result += "#";
    else result += i;
  }
  return result;
};

const solution2 = (s) => {
  let result = s;
  result = result.replace(/A/g, "#");
  return result;
};
