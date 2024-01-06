// Objects 

const person = {
    firstName: "Precious",
    lastName: "Tsewoo",
    Id: 11020486,
    age: 19,
    location: ['Planet', 'Earth', 'Africa', 'Ghana', 'Volta', 'Akatsi', 'Olive ST'],
    isProgrammer: true,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.Id);
console.log(person.age)
console.log(person.isProgrammer);

console.log("--------------------------")

//Anothuerf way of accessing the properties of our object
console.log(person["lastName"]);
//The above is mostly used when you have a property to be a number and might cause a problem when do console.log(person.10) when 10 is a property of our object



// When we what to add a property to our object
person.nickName = "Golden_Boy"

//when we want to delete a property of an object
delete person.firstName


//-------Exercise-----------
//Create object name (car)
//add (type, model, color) as properties
//check the type of object
//Update the type property to "Toyota"
//Add new property wheels 
//log car to the console

console.log("---------------------")
const Car = {
    type: "4-wheel",
    model: "Toyota Corolla",
    color: "cyan magenta"
}

Car.type = "SUV";

Car.wheels = "4";

console.log(Car);

console.log(typeof Car)