// Define the function build_car that takes two required parameters and an arbitrary number of other properties
function build_car(manufacturer: string, model: string, ...additionalProperties: [string, any][]): object {
        
    // Initialize the car object with required properties
        let car: { [key: string]: any } = { manufacturer, model };

        // Loop through additional properties and add them to the car object
        additionalProperties.forEach(([key, value]) => {
            car[key] = value;
        });

         return car;
    }

    // Call the fucntion with required and additional parameters
    let myCar = build_car('Tesla', 'Model S', ['color', 'red'], ['battery',
        '100kWh']);

    // Print the object to verify the contents
    console.log(myCar);