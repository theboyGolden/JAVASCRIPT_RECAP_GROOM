 //console is an object which has so many optional commands like console.log, console.warn, console.table, console.error and so many more. But the most commonly used is the console.log used to print something in the console.
 // As we have aloready done, we used two forward slashes to comment stuff in javascript
//pseudocode is a code which is used just for implementation purposes but is not actually shown or displayed in the final printout or display
/* the general format for declaring a variable is as follows 
  
    reserved keyword (variable name) (type of value)
*/

//Declared variable
let name1;

//Assign value to our variable
name1 = "Precious Tsewoo";

//Other ways of declaring variables
var color = "orange";
const colour ="blue";

//Now let's check if our variables were declared succesfully
console.log (colour);
console.log (color);
console.log (name1);

//But with the const keyword, once you assign a value to the variable, you cannot change it or you cannot reassign a new value to the same variable 


/*
EXERCISE 1
1. Create a variable name (name) & store your name.
2. Create variable name (whatDoYouWannaBecomeInYourLife) & store "programmer"
3. Create variable name (gender) & store your gender.
4. Create variable name (twitterHandle) & store your twitter handle.
5. Finally log all variables to the console */
console.log("-------------------------------")
console.log("Answers to Exercise 1")

var name = "Precious Tsewoo";
var whatDoYouWannaBecomeInYourLife = "programmer";
var gender = "male";
var twitterHandle = "@golden_boy";

console.log (name);
console.log(whatDoYouWannaBecomeInYourLife);
console.log(gender);
console.log(twitterHandle);

/* 
EXERCISE 2
1. Create Variable name(firstFavNum) & store your favorite number.
2. Create Variable name (secondFavNum) & store you sescond fav number.
3. Add (firstFavNum & secondFavNumber).
4. Subtract (firstFavNum & secondFavNumber)
5. Multiply (firstFavNum & secondFavNumber).
6. Divide (firstFavNum & secondFavNumber).
7. Check (firstFavNum Modulus secondFavNumber)
8. Check the power of (firstFavNum)
*/
console.log("-------------------------------")
console.log("Solutions to Exercise 2");

let firstFavNum = 15;
let secondFavNum = 8;

console.log (firstFavNum + secondFavNum);
console.log (firstFavNum - secondFavNum);
console.log (firstFavNum * secondFavNum);
console.log (firstFavNum / secondFavNum);
console.log (firstFavNum % secondFavNum);
console.log (firstFavNum ** secondFavNum);

//let fullnumber = firstFavNum.concat(secondFavNum  )




/*
EXERCISE 3
1. Create variable name (favActorFirstName) & store your fav Actor name.
2. Create a variable name (favActorLastName) & store the last name of (FA).
3. Create variable name (fullName) & concatenate (favActorFirstname, favActorLastName)
4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
5. Create a variable name (message) & store `My favorite Actor is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
6. Now append this message to the (message variable) `his best show is Silicon Valley`.
7. Now Log your Message.
*/

console.log("-------------------------------")
console.log("Solution to Exercise 3")

var favActorFirstName = "Liam ";
var favActorLastName = "Neeson";
var fullName = favActorFirstName + favActorLastName;
var uppercase = fullName.toUpperCase();
var message = `My favorite Actor is ${uppercase}. He is very professional with his roles and makes me want to be like him.`;
message += `his best show is Silicon Valley`;
console.log(message);

console.log("-------------------------------")
// Type conversion

let money = "50";

//Convert string to number
money = parseInt(money)
console.log(money)

//Alternatively
money = money.toString;
console.log(money)