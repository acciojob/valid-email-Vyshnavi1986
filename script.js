function validEmail(str) {
 const email = str; 
const emailPattern =  
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
//const isValid = emailPattern.test(email); 
console.log(emailPattern.test(email));
}

// Do not change the code below.

const str = prompt("Enter an email address.");
validEmail(str);
// Example usage:
console.log(validEmail("example@example.com")); // true
console.log(validEmail("example@.com")); // false
console.log(validEmail("example.com")); // false
console.log(validEmail("example@example")); // false