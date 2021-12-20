// 자릿수 더하기

const solution = (n) => {
  return n.toString().split("").reduce((acc, cur) => acc + parseInt(cur), 0)
}