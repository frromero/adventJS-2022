function checkJump(heights) {
  const index=heights.indexOf(Math.max(...heights))
  const split=[heights.slice(0,index),heights.slice(index+1)]
  if(
    (split.length===2 &&split.some(s=>s.length===0)) || 
    (split.length>2 && !split.some(s=>s.length===0))) {
      return false
    }

  const ascending=split[0];
  for(let i=0;i<ascending.length-1;i++){
    if(ascending[i]>ascending[i+1]){
      return false;
    }
  }

  const descending=split[split.length-1];
  for(let i=0;i<descending.length-1;i++){
    if(descending[i]<descending[i+1]){
      return false;
    }
  }
  return true;
}

module.exports = checkJump