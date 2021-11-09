text = [
  '   + -- + - + -   ',
  '   + --- + - +   ',
  '   + -- + - + -   ',
  '   + - + - + - +   '
];

#ord(): 문자 -> 숫자
#chr(): 숫자 -> 문자

result = [i.strip().replace(' ', '').replace('+', '1').replace('-', '0') for i in text]
''.join(list(map(lambda x : chr(int(x, 2)), result)))