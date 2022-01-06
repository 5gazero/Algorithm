// 같은 숫자는 싫어

const solution = (arr) => {
  // const answer = [arr[0]];
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i - 1] !== arr[i]) answer.push(arr[i]);
  // }
  // return answer;
  return arr.filter((i, idx) => i !== arr[idx - 1]);
};
