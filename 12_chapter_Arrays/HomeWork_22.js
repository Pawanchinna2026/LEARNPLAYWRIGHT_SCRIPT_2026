// maximum array
const array = [3,7,2,9,1];
let largest = array[0];

array.forEach(element => {
    if (element > largest) {
        largest = element;
    }
});
console.log("Largest element:", largest);

// find freq of array of elements in array

const arr = [1, '1', true, 1, true];
const frequencyMap = new Map();

for (const item of arr) {
  frequencyMap.set(item, (frequencyMap.get(item) || 0) + 1);
}

console.log(frequencyMap.get(1));    


// find duplicate elements in array
const a1 = [1, 2, 3, 4, 5, 2, 3, 6];
let dupli = a1.filter((value, index) => 
	a1.indexOf(value) !== index && a1.lastIndexOf(value) === index);
console.log(dupli);

// smallest elemt array
const numbers = [5, 12, 8, 130, 44];

const smallest = Math.min(...numbers);

console.log(smallest);

// reverse array
let ab = [1, 2, 3, 4, 5];
ab.reverse();
console.log(ab);