// Define the function city_country that returns a formatted string
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the function and store the result for three different city-country pairs
var city1 = city_country('Lahore', 'Pakistan');
var city2 = city_country('Tokyo', 'Japan');
var city3 = city_country('Paris', 'France');
// Print the values returned by the function
console.log(city1); // Outputs: Lahore, Pakistan
console.log(city2); // Outputs: Tokyo, Japan
console.log(city3); // Outputs: Paris, France
