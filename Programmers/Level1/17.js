const solution = (n) => {
  let sorted = n.toString().split('').sort((a,b) => b - a).join('');
  return parseInt(sorted)
}
