// 문자열 내 p와 y의 개수

const solution = (s) => {
  let answer = true;
  let inP = 0;
  let inY = 0;
  let string = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (string[i].includes('p')) inP++;
    else if (string[i].includes('y')) inY++;
  }
  if (inP !== inY) answer = false

  return answer;
}