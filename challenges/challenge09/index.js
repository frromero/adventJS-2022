//20 puntos
function countTime(leds) {
  let time=0;
  const isAnyOff = (array) => array.some((n)=>n===0);

  while(isAnyOff(leds)){
      time+=7;
      leds=leds.map((l,i)=>{
      const leftIndex=i-1<0?leds.length-1:i-1; 
      return l===1
          ? l:
          leds[leftIndex]
      })
  }

  return time;
}

//10 puntos

// function countTime(leds) {
//   const isAnyOff = (array) => array.some((n)=>n===0);
//   const nextIteration = (array,time) => {
//     return !isAnyOff(array)
//       ? time: 
//       nextIteration(array.map((l,i)=>{
//         const leftIndex=i-1<0?array.length-1:i-1; 
//         return l===1
//           ? l:
//           array[leftIndex]
//       }),time+7)
//   };
//   const time = nextIteration(leds,0);
//   return time;
// }

module.exports = countTime