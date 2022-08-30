/*
Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.

Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.

With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin, Celsius, and Fahrenheit thermometers
For example, 283 K converts to 10 °C which converts to 50 °F.

If you get stuck during this project or would like to see an experienced developer work through it, click “Get Unstuck“ to see a project walkthrough video.
*/

const kelvin = 785; // Today's temperature in Kelvin
let celsius = kelvin - 273; // Changing Kelvin into Celsius
let fahrenheit = Math.floor(celsius * (9/5) + 32); // Calculating Fahrenheit, then rounding the result
let newton = Math.floor(celsius * (33/100)); // Calculating Newton from Celsius, then rounding the result

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);