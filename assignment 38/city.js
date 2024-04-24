// Define the function describe_city with parameters for city and country
// Set a default value for the country parameter
function describe_city(city, country) {
    if (country === void 0) { country = 'USA'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the fucntion for a city in the default country
describe_city('New York');
// Call the fuction for another city in the default country
describe_city('Los Angeles');
// Call the function for a city not in the default country
describe_city('Tokyo', 'Japan');
