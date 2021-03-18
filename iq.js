const str = "1 2 2";

function iqTest(numbers) {
  const nums = numbers.split(" ");

  const map = new Map([
    ["even", []],
    ["odd", []],
  ]);
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const even = Number(num) % 2;
    if (even === 0) {
      map.get("even").push(i + 1);
    } else {
      map.get("odd").push(i + 1);
    }
  }
  const even = map.get("even");
  return even.length === 1 ? even[0] : map.get("odd")[0];
}

console.log(iqTest(str));
