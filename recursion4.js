function nthNumber(num) {
  if (num === 1) {
    return 1;
  }

  return num + nthNumber(num - 1);
}

console.log(nthNumber(5));
