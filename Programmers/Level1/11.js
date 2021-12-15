// 문자열 다루기 기본

const solution = (s) => {
  return (
    (!s.split("").some((i) => isNaN(i)) && s.length === 4) || s.length === 6
  );
};

const solution2 = (s) => {
  return (
    (s.split("").every((i) => !isNaN(i)) && s.length === 4) || s.length === 6
  );
};
