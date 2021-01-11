function powerCalculator(intBase, intEx) {
  if (intEx <= 0) {
    return console.log("exponent should be >= 0");
  }

  let result = intBase ** intEx;
  return console.log(result);
}

powerCalculator(10, 0);
