var personName = "Sanaan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(personName));
