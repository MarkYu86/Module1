const Sentiment = require('sentiment');
const sentiment = new Sentiment();
const result = sentiment.analyze('Cats are stupid.');
console.log(result());    // Score: -2, Comparative: -0.666

const result2 = sentiment.analyze("Dogs are awesome");
console.log(result2())

const user = {
    "first_name" : "Mark",
    "last_name" : "Yu",
    "age" : 28,
    "followers" : 128
}
// we can access properties with dot notation
console.log(user.first_name); // Sammy
console.log(user.age); // 25
// or with array style square bracket syntax
console.log(user["last_name"]); 
user.followers = 129; // we can also assign new values to object properties
user.location = 'Christchurch'; // or create new properties
user.email = "yuzihao.1997@gmail.com"// or create new properties
user.first_name = "Zihao"
console.log("New user:",user.first_name);
console.log(user("email"));//yuzihao.1997@gmail.com