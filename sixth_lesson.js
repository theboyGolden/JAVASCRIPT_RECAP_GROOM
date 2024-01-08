//scope

//scope in javascript refers to the current context of code, which determines the accessibility  of variables to Javascript.

//There are two types of scopes in Javascript.

//Global scope variables are those declared outside of a block
//Local Scope variables are those declared inside of a block.

let textmessage = "hi";
console.log(textmessage);

// the variable textMessage is accessible from where we have declared it 

{
    let textMessage = "hello";
    console.log(textMessage); 
}

console.log (textMessage)

//Now we can see that the variable textMessage is not available outside where it was described
//Global scope variables have their functions accessibkle everywhere
//But local scope variables have their functions accessible only within the enclosure it was defined