let data = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   '
];

let result = '';
for (let i of data) {
  result += String.fromCharCode(parseInt(i.replace(/ /g, '').replace(/\+/g, '1').replace(/-/g, '0'), 2)); // 이진수 -> 십진수 -> 문자
}

console.log(result); 