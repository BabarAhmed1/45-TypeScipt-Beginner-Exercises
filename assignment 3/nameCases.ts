const personName: string = "Sanaan";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
console.log(toTitleCase(personName));