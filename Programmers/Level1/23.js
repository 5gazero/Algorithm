// 이상한 문자 만들기

const solution = (s) => {
  return s
    .split(" ")
    .map((i) =>
      [...i]
        .map((cur, idx) =>
          idx % 2 === 0 ? cur.toUpperCase() : cur.toLowerCase(),
        )
        .join(""),
    )
    .join(" ");
};
