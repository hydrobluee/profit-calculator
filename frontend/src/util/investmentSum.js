function investmentSum(arr) {
  const sum = arr.reduce((acc, val) => {
    if (val.charAt(0) == "(" || val.charAt(0) == "[") {
      const investmentValue = val.substring(1, val.length - 1);
      if (investmentValue.length > 0) acc += parseInt(investmentValue);
    }
    return acc;
  }, 0);

  return sum;
}
export default investmentSum;
