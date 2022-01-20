const solution = (price, money, count) => {
  let fee = 0;
  for (let i = 1; i <= count; i++) {
    // 이용금액 총 계산
    fee += price * i
  }
  // 재산에서 이용금액 뺀 값이 양수라면 넘어가고,
  // 음수라면 양수로 바꿔 return
  return (money - fee > 0) ? 0 : -(money - fee)
}
