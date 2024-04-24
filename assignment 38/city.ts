// Define the function describe_city with parameters for city and country
// Set a default value for the country parameter
function describe_city(city: string, country: string = 'USA'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the fucntion for a city in the default country
describe_city('New York');

// Call the fuction for another city in the default country
describe_city('Los Angeles');

// Call the function for a city not in the default country
describe_city('Tokyo', 'Japan');
