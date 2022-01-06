// 가운데 글자 가져오기

const solution = (s) => {
  let mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
};
