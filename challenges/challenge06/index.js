function createCube(size) {
  const a = "/\\";
  const b = "_\\".repeat(size);
  const c = "\\/";
  const d = "_/".repeat(size);
  let up = "";
  let down = "";
  for (let i = 1; i <= size; i++) {
    up += `${" ".repeat(size - i)}${a.repeat(i)}${b}\n`;
    down += `${" ".repeat(i - 1)}${c.repeat(size - i + 1)}${d}\n`;
  }
  return up + down.trim();
}
module.exports = createCube;
