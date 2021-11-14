// 최솟값 구하기

const solution = (arr) => {
  let result, min = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  result = min;
  return result;
}