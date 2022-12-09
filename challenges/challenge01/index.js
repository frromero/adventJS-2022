function wrapping(gifts) {
    return gifts.map(g=>{
      const side = '*'.repeat(g.length+2);
      return `${side}\n*${g}*\n${side}`;
    })
  }
module.exports = wrapping;
