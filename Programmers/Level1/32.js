// 2016년

const solution = (a, b) => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return daysOfWeek[new Date(`${a} ${b}, 2016`).getDay()];
}
