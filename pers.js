function persistence(num) {
  //code me
  num = String(num);
  let times = 0;
  if (num.length === 1) return times;

  const findOne = (digits) => {
    if (digits.length === 1) {
      return;
    }
    let res = digits[0];
    for (let x = 1; x < digits.length; x++) {
      const curr = digits[x];
      res = res * curr;
    }
    res = String(res);
    times++;
    findOne(res);
  };
  findOne(num);
  return times;
}

console.log(persistence(3));
console.log(persistence(999));
console.log(persistence(25));
