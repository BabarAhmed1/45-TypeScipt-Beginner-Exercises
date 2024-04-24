// Define the function build_car that takes two required parameters and an arbitrary number of other properties
function build_car(manufacturer, model) {
    var additionalProperties = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalProperties[_i - 2] = arguments[_i];
    }
    // Initialize the car object with required properties
    var car = { manufacturer: manufacturer, model: model };
    // Loop through additional properties and add them to the car object
    additionalProperties.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
// Call the fucntion with required and additional parameters
var myCar = build_car('Tesla', 'Model S', ['color', 'red'], ['battery',
    '100kWh']);
// Print the object to verify the contents
console.log(myCar);
