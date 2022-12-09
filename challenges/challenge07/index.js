function getGiftsToRefill(a1, a2, a3) {
  const gifts = [...new Set([...a1, ...a2, ...a3])];
  return gifts.filter((g) => {
    const counter = [a1, a2, a3].filter((array) => array.includes(g));
    return counter.length === 1;
  });
}

module.exports = getGiftsToRefill;