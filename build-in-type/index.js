//  built-in data type : number, string, boolean, void, undefine, null
var userId;
var id;
var firstName;
var lastName;
var fullName;
var isActive;
userId = 10;
id = 1254;
firstName = "Tariqul Islam";
lastName = " tarek";
isActive = true;
fullName = firstName.concat(lastName);
console.log("your number is: ".concat(userId, " and your name is: ").concat(fullName, " account: ").concat(isActive, " ID: ").concat(id));
console.log(fullName.split(" "));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
function display() {
    console.log("hi I am tareq");
}
display();
