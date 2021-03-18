function dirReduc(arr) {
  const results = [];
  let prev;
  for (let i = 0; i < arr.length; i++) {
    const dir = arr[i];
    const op = oppo(dir);
    if (prev && prev === op) {
      results.pop();
      prev = results[results.length - 1];
    } else {
      results.push(dir);
      prev = dir;
    }
  }
  return results;
}
function oppo(dir) {
  switch (dir) {
    case "EAST":
      return "WEST";
    case "WEST":
      return "EAST";
    case "SOUTH":
      return "NORTH";
    case "NORTH":
      return "SOUTH";
    default:
      return null;
  }
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);
