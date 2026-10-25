// search array Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let desk=["akhil","vinod","naga","vicky",10,20,90]
// includes returns booolean either true or flase condition satisfied
console.log(desk.includes('vicky')) // Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(desk.includes('vijay'))
console.log(desk.indexOf(10))
console.log(desk.indexOf('akhil'))
console.log(desk.indexOf(7)) // index not present print -1 value by default
console.log(desk.indexOf(-4)) //index not present print -1 value by default
// last index search from the end
console.log(desk.lastIndexOf(20))
console.log(desk.lastIndexOf('naga'))
// find : Returns the value of the first element in the array where predicate is true, and undefined otherwise.
let nums= [10,20,30,45]
res=nums.find(temp =>temp >15)
console.log(res) // 20
// example 2
let nums1= [10,20,30,45]
res1=nums1.find(tempval =>tempval >45)
console.log(res1) // undefined
// findIndex Returns the index of the first element in the array where predicate is true, and -1 otherwise.
let nps= [10,20,30,45]
res2=nps.findIndex(tempval =>tempval >25)
console.log(res2)
// example 2 Returns the index of the first element in the array where predicate is true, and -1 otherwise.
let nps1= [10,20,30,45]
res3=nps1.findIndex(tempval =>tempval >55)
console.log(res3)// undefined 
// find lastindex Returns the value of the last element in the array where predicate is true, and undefined otherwise.
let coca=[10,22,33,50]
score=coca.findLast(n=>n>44)
console.log(score) //50
// example2 undefined
let coca1=[10,22,33,50]
score1=coca1.findLast(n=>n>54)
console.log(score1) // undefined
// findlastIndex : Returns the index of the last element in the array where predicate is true, and -1 otherwise.
let boat=[10,25,33,50]
scoot=boat.findLastIndex(n=>n>30)
console.log(scoot)

// example2
let boost=[10,25,33,50]
scooty=boost.findLastIndex(n=>n>60)
console.log(scooty)// -1



