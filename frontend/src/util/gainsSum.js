function gainsSum(arr) {
  const sum = arr.reduce((acc, val) => {
    const firstChar = val.charAt(0);
    if (firstChar >= "0" && firstChar <= "9" && val != " ") acc += Number(val);
    return acc;
  }, 0);
  return sum;
}

export default gainsSum;
