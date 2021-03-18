//always has to be 10
function isValidWalk(walk) {
  //insert brilliant code her
  if (walk.length !== 10) return false;
  const half = walk.length / 2;
  const one = trimDir(walk.slice(0, half)),
    two = trimDir(walk.slice(half, walk.length)).reverse();
  for (let i = 0; i < one.length; i++) {
    const oneI = one[i];
    const opOne = oppo(oneI);
    const twoI = two[i];
    if (opOne !== twoI) {
      return false;
    }
  }

  return true;
}
const trimDir = (arr) => {
  console.log(arr);
  const res = [];
  let prev;
  for (const dir of arr) {
    const op = oppo(dir);
    if (prev && prev === op) {
      res.pop();
      prev = res[res.length - 1];
    } else {
      res.push(dir);
      prev = dir;
    }
  }
  return res;
};
function oppo(dir) {
  switch (dir) {
    case "n":
      return "s";
    case "s":
      return "n";
    case "e":
      return "w";
    case "w":
      return "e";
    default:
      return null;
  }
}
console.log(isValidWalk(["n", "n", "n", "s", "s", "s", "e", "w", "n", "s"]));
//Actual solution
// function isValidWalk(walk) {
//   var dx = 0;
//   var dy = 0;
//   var dt = walk.length;

//   for (var i = 0; i < walk.length; i++) {
//     switch (walk[i]) {
//       case "n":
//         dy--;
//         break;
//       case "s":
//         dy++;
//         break;
//       case "w":
//         dx--;
//         break;
//       case "e":
//         dx++;
//         break;
//     }
//   }
// }
