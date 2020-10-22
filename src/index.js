module.exports = function reverse(n) {
  let result;
  if (n < 0) {
    n *= -1;
  }
  result = String(n).split('').reverse().join('');
  return +result;
}
