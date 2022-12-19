function dryNumber(dry, numbers) {
  const array=[...new Array(numbers+1).keys()];
  array.shift();
  return array.filter(n=>n.toString().indexOf(dry) > -1);
}

module.exports = dryNumber