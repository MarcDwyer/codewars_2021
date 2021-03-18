function longestConsec(strarr, k) {
  if (k > strarr.length) return "";
  // your code
  const map = new Map();

  let times = 0;
  let result = "";
  for (let x = 0; x < strarr.length; x++) {
    const curr = strarr[x];
    if (times === k) {
      map.set(result, result.length);
      result = "";
      times = 0;
      continue;
    } else {
      result += curr;
      ++times;
    }
  }
  return map;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
