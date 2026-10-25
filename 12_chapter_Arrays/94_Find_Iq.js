let num=[10,20,30,40]
let res=num.find(temp => temp>20)
console.log(res)
// undefined
const no=[10,20,5,3,4]
const res1=no.find(temp => temp>20)
console.log(res1)

// find Index
let numbers = [10, 20, 30, 40];

let index = numbers.findIndex(num => num > 25);
// finf last index
console.log(index);
numbers.findLast(num => num > 25);

