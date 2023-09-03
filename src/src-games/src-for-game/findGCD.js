/* eslint-disable no-param-reassign */
export default (a, b) => {
  if (a < b) {
    const temp = a;
    a = b;
    b = temp;
  }
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
