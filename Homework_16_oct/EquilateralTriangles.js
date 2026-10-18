let a, b, c
a = 2
b = 2
c = 2
if (a + b > c || b + c > a || a + c > b) {
    if (a == b && b == c) {
        console.log("equilateral triangle")
    }
    else if ((a === b || a === c || b === c)) {
console.log("Isosceles Triangle ")
    }
    else {
console.log("Scalene Triangle (All Triangles are different).") 
    }
}


    
