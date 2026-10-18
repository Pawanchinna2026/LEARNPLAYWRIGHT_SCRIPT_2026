
let triangle1=10;
 let triangle2=5;
 let triangle3=10;
 if (triangle1 === triangle2 && triangle2 === triangle3) {
        console.log("Equilateral Triangle (All 3 sides are equal).") ;
    } 
    
    else if (triangle1 === triangle2 || triangle1 === triangle3 || triangle2 === triangle3) {
        console.log("Isosceles Triangle (Only Two sides are equal).");
    } else {
        console.log("Scalene Triangle (All Three sides are different).")
    }