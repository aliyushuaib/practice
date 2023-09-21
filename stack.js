const addNums = (a, b) => {
  let sum = a + b;
  if (b > 8) {
    subNums(9, 4) + sum;
  }
  return sum;
};

const subNums = (c, d) => {
  return c - d;
};

console.log(addNums(4, 14));
