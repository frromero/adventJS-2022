function sortToys(toys, positions) {
  const array=toys.map((t,i)=>{
    return {
      toy:t,
      position:positions[i]
    }
  });
  array.sort((a,b)=>a.position-b.position);
  return array.map(a=>a.toy)
}

module.exports = sortToys