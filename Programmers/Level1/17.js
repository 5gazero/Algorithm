// 정수 내림차순으로 배치하기

const solution = (n) => {
  let sorted = n.toString().split('').sort((a,b) => b - a).join('');
  return parseInt(sorted)
}
