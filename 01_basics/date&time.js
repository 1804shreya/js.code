//Date
let MyDate = new Date()
console.log(MyDate.toDateString())
console.log(MyDate.toString())
console.log(MyDate.toLocaleString())
console.log(typeof MyDate)
let my = new Date(2023,1,23)
console.log(my.toLocaleString())

let myTime=Date.now()
console.log(myTime);
console.log(Math.floor(Date.now()/1000));