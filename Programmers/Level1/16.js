// 하샤드 수

const solution = (x) => {
  return x % (x.toString().split("").reduce((acc, cur) => acc + parseInt(cur), 0)) === 0
}