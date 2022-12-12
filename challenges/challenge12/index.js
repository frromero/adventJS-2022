//180 puntos

// function selectSleigh(distance, sleighs) {
//   for(let i=sleighs.length-1;i>=0;i--){
//     if(sleighs[i].consumption*distance<=20) return sleighs[i].name
//   }
//   return null;
// }

//360 puntos
function selectSleigh(distance, sleighs) {
  const best=sleighs.reverse().find((s)=>s.consumption*distance<=20)
  return best ? best.name : null
}
module.exports = selectSleigh