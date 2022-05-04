// 모의고사

const solution = (answers) => {
  const pattern1 = [1, 2, 3, 4, 5];
  const pattern2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const pattern3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const score = [0, 0, 0];

  score[0] = answers.filter(
    (i, idx) => i === pattern1[idx % pattern1.length]
  ).length;
  score[1] = answers.filter(
    (i, idx) => i === pattern2[idx % pattern2.length]
  ).length;
  score[2] = answers.filter(
    (i, idx) => i === pattern3[idx % pattern3.length]
  ).length;

  const result = [];
  const max = Math.max(...score);
  score.map((i, idx) => {
    if (i === max) result.push(idx + 1);
  });
  return result;
};
