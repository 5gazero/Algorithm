// 핸드폰 번호 가리기

const solution = phone_number => [...phone_number].fill("*",0,phone_number.length-4).join("");