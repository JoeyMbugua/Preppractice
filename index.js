//adding variables

var date = "April 10th"
//method 1

console.log("my birthday is " + date)

//method 2 - using template literals

console.log(`my birthday is ${date}`)

//Template Literals in functions

function happyHolidays() {
    return "Happy holidays!"
  }
  
  function happyHolidaysTo(name) {
    return `Happy holidays, ${name}!`
  }
  
  function happyCustomHolidayTo(holiday, name) {
    return `Happy ${holiday}, ${name}!`
  }
  
  function holidayCountdown(holiday, days) {
    return `It's ${days} days until ${holiday}!`
  }