function incrementString(str) {
  const result = str.split("");
  let nums = [];
  let startIndex;
  const zeroes = [];
  for (let i = 0; i < str.length; i++) {
    const curr = str[i];
    const n = Number(curr);
    if (typeof n === "number" && !isNaN(n)) {
      if (startIndex === undefined) {
        startIndex = i;
      }
      if (n === 0 && !nums.length) {
        zeroes.push(n);
        continue;
      }
      nums.push(n);
    }
  }
  result.splice(startIndex, nums.length + zeroes.length);
  if (zeroes.length && !nums.length) {
    zeroes[zeroes.length - 1] = 1;
    return result.join("") + zeroes.join("");
  }
  nums = Number(nums.join(""));
  nums++;
  return result.join("") + zeroes.join("") + nums;
}
// console.log(incrementString("foo0043"));
// console.log(incrementString("foo100"));
// console.log(incrementString("foo000"));
console.log(incrementString("foo099"));
