// Author: Sanaan
// Date: 12/3/24
// This program calculates the area of the circle given its radius.

const calculateAreaOfCircle = (radius:number): number => {
    return Math.PI * radius * radius;
} ;

//example usage:
console.log(calculateAreaOfCircle(5)); //outputs the area of the circle with radius 5


// Author: Sanaan
// Date: 12/3/24
// This program converts a temperature from Fahrenheit to Celsius.

const fahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5 / 9;
};
//example usage:
console.log(fahrenheitToCelsius(32)); //outputs the equivalent in Celsius of 32 degree F