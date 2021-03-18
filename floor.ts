function floors(rows: number) {
  const pieces = [1];
  for (let x = 1; x < rows; x++) {
    const last = pieces[pieces.length - 1];
    pieces.push(last + 2);
  }
  const max = pieces[pieces.length - 1];
  const center = Math.round(max / 2);
  console.log(center);
  const tree = [];
  for (const piece of pieces) {
    const segment = new Array(max).fill(" ");
    const stars = [];
    for (let i = 0; i < piece; i++) {
      stars.push("*");
    }
    segment.splice(center - stars.length / 1.5, stars.length, stars);
    tree.push(segment.join(""));
  }
  return tree;
}

// Problem is I need an equation to detect where to insert stars

console.log(floors(6));
