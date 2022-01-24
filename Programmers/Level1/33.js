// 완주하지 못한 선수

const solution = (participant, completion) => {
  participant.sort();
  completion.sort();
  return participant.find((runner, idx) => runner !== completion[idx]);
};
