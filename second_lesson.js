/* 
EXERCISE 1
1. Create variable name (password)store nothing.
2. If password is equal to 8 print "Welcome"
3. If password is less than or equal to 8 print "Password is too short"
4. If password is greater than or equal to 8 print "Too long Password" & "Password should be 8 characters"
5. If all fails then print "Please provide a valid password."*/

console.log("-------------------------------")
let password;
password = "Preciou";
if (password.length === 8){
    console.log("Welcome")
} else if (password.length < 8) {
    console.log("Password is too short")
} else if (password.length > 8){
    console.log ("Too long Password. " + "Password should be 8")
} else {
    console.log("Please provide a valid password.")
}

//Switch Statements in JAvascript
// Switch statements work pretty much like If else statments
/*switch (expression){
 case x:
    console.log ();
 case y:
    console.log();
 default:
    console.log();
} break;
*/