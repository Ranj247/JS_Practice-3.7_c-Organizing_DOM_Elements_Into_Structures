// Get the body - create a variable tbody using tag name tbody and index location 
// Get all the rows - create a variable rows which are the tbody childrens  
let tbody = document.getElementsByTagName("tbody")[0];
let rows = tbody.children;


// Set up the array to hold our people
// Create variable people and assign empty array
let people = [];

// Iterate through all rows 
// For loop condition: 
// Create empty object person, create new properties and assign values and push them into the array people
for (let row of rows) {
    let person = {};

    let cells = row.children;
    person.name = cells[0].textContent;
    person.age = cells[1].textContent;
    person.favoriteFood = cells[2].textContent;
    people.push(person);
}

// console log people
// People is an Array containing 4 objects containg prop:value pairs
console.log("People:\n", people);


// Now you can do anything you want...find people who love steak!
// Basically, if the callback function returns true, the current element will be in the resulting array. If it returns false, it won’t be.
let steakLovers = people.filter(function(person) {
    return person.favoriteFood === 'Steak';
});
console.log("\nPeople who love steak:\n", steakLovers);

// Sort by age (see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
// sorts ascending order of age of people
let sortedPeople = people.sort(function(a, b) {
    return a.age - b.age;
});
console.log("\nSorted people:\n", sortedPeople);

// Get the name of the youngest person
// sortedPeople is an array containing four objects, the first object is sorted according to the lowest age of the person
// So we selecting first object in the array and looking for name property value
let youngest = sortedPeople[0].name;
console.log("\nYoungest person is:", youngest);

// Or using something more complex, like Array.prototype.reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
oldest = people.reduce(function(currentOldest, person) {
    return (person.age > currentOldest.age) ? person : currentOldest;
});
console.log(`${oldest.name}, the oldest, is ${oldest.age} years old`);