// [1차] 비밀지도

const solution = (n, arr1, arr2) => {
  const answer = [];
  // | => 하나라도 1이면 1반환
  for (let i = 0; i < n; i++) {
    const bin = (arr1[i] | arr2[i]).toString(2);
    let temp = "";
    for (let j = bin.length - n; j < bin.length; j++) {
      bin[j] === "1" ? (temp += "#") : (temp += " ");
    }
    answer.push(temp);
  }
  return answer;
};
