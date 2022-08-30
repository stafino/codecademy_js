const kelvin = 785; // Today's temperature in Kelvin
let celsius = kelvin - 273; // Changing Kelvin into Celsius
let fahrenheit = Math.floor(celsius * (9/5) + 32); // Calculating Fahrenheit, then rounding the result
let newton = Math.floor(celsius * (33/100)); // Calculating Newton from Celsius, then rounding the result

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);