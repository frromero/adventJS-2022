function checkPart(part) {
  const array=part.split('');
  if(part===part.split('').reverse().join('')){
      return true;
  }
  return array.some((l,i)=>{
      const copy=[...array];
      copy.splice(i-1,1);
      return copy.join('')===copy.reverse().join('')
  })
}
module.exports = checkPart