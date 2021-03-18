function sqInRect(lng, wdth) {
  if (lng === wdth) return null;
  let cubes = lng * wdth;
  let smallest = lng < wdth ? lng : wdth;
  const result = [];
  while (cubes > 0 && smallest > 0) {
    const gone = smallest * smallest;
    const left = cubes - gone;
    if (gone === 1 && cubes >= 1) {
      result.push(1);
      cubes--;
      continue;
    } else if (left < 0) {
      --smallest;
      continue;
    }
    cubes = left;
    result.push(smallest);
  }

  return result;
}

// console.log(sqInRect(5, 3));
console.log(sqInRect(20, 14));
// [14, 6, 6, 2, 2, 2]
// [3, 2, 1, 1]
