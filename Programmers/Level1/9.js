// 수박수박수박수박수박수?

const solution = (n) => {
  let answer = "수";
  for (let i = 1; i < n; i++) {
    if (answer[i - 1] === "수") answer += "박";
    else answer += "수";
  }
  return answer;
};
