// K번째수

const solution = (array, commands) => {
  const answer = [];
  commands.map(arr => {
    const parts = array.slice(arr[0] - 1, arr[1]).sort((a, b) => a - b);
    answer.push(parts[arr[2] - 1]);
  });
  return answer;
};
