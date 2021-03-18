const zero = (...args) => eval(`0 ${args}`);
const one = (...args) => eval(`1 ${args}`);
const two = (...args) => eval(`2 ${args}`);
const three = (...args) => eval(`3 ${args}`);
const four = (...args) => eval(`4 ${args}`);
const five = (...args) => eval(`5 ${args}`);
const six = (...args) => eval(`6 ${args}`);
const seven = (...args) => eval(`7 ${args}`);
const eight = (...args) => eval(`8 ${args}`);
const nine = (...args) => eval(`9 ${args}`);

const plus = (n) => `+ ${n}`;
const minus = (n) => `- ${n}`;
const dividedBy = (n) => `/ ${n}`;
const times = (n) => `* ${n}`;

// console.log(two(plus(three())));
console.log(four(dividedBy(nine())));
