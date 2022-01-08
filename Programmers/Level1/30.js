// 최소직사각형

const solution = (sizes) => {
  const width = [];
  const height = [];
  sizes.map((i) => {
    i[0] > i[1]
      ? (width.push(i[0]), height.push(i[1]))
      : (width.push(i[1]), height.push(i[0]));
  });
  width.sort((a, b) => b - a);
  height.sort((a, b) => b - a);
  return width[0] * height[0];
};
