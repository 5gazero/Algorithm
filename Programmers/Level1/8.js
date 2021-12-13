// 서울에서 김서방 찾기

const solution = (seoul) => {
  let answer = "";
  seoul.filter((name, index) => {
    if (name === "Kim") answer = index;
  });
  return `김서방은 ${answer}에 있다`;
};
