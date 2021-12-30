// 시저 암호

const solution = (s, n) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let answer = "";

  s.split("")
    .map((i) => {
      const str = upper.includes(i) ? upper : lower;
      let index = str.indexOf(i) + n;
      if (i === " ") {
        answer += " ";
        return false;
      } else if (index >= str.length) {
        index -= str.length;
      }
      answer += str[index];
    })
    .join("");

  return answer;
};
