function rot13(message) {
  message = message.split("");
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const map = new Map();

  letters.forEach((l, i) => map.set(l, i));

  let result = "";

  message.forEach((c, i) => {
    const isUpp = c === c.toUpperCase();
    if (isUpp) c = c.toLowerCase();
    let index = map.get(c);
    if (typeof index === "undefined") {
      result += c;
      return;
    }

    index += 13;
    if (index > letters.length || !letters[index]) {
      index = index - letters.length;
    }
    const rot = isUpp ? letters[index].toUpperCase() : letters[index];
    result += rot;
  });
  return result;
}

console.log(rot13("abcdefghijklmnopqrstuvwxyz"));
