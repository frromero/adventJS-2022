function distributeGifts(packOfGifts, reindeers) {
  const packSize = packOfGifts.join("").length;
  const reindeersSize = reindeers.reduce((a, b) => a + b.length * 2, 0);
  return Math.floor(reindeersSize / packSize);
}
module.exports = distributeGifts;
