function countHours(year, holidays) {
    return holidays.filter(h=>
      ![0,6].includes((new Date(`${year}/${h}`)).getDay())
    ).length*2;
  }
  
module.exports = countHours