function productFib(prod) {
  const fib = [0, 1];

  let index = 1;

  while (true) {
    const curr = fib[index];
    const prev = fib[index - 1];
    const product = curr * prev;

    if (product === prod) {
      return [prev, curr, true];
    } else if (product > prod) {
      return [prev, curr, false];
    }
    fib.push(curr + prev);
    ++index;
  }
}

console.log(productFib(4895));
console.log(productFib(5895));
