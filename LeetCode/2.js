// Add Two Numbers

const addTwoNumbers = (l1, l2) => {
  const n1 = l1.reverse().reduce((acc, cur) => acc.toString() + cur);
  const n2 = l2.reverse().reduce((acc, cur) => acc.toString() + cur);
  const num = parseInt(n1) + parseInt(n2);
  const result = num
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reverse();
  return result;
};