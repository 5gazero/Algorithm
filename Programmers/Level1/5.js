// 직사각형 별찍기

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]);
  const b = Number(n[1]);

  for (let i = 1; i <= b; i++) {
    let temp = "";
    for (let j = 1; j <= a; j++) {
      temp += "*";
    }
    console.log(temp);
  }
});
