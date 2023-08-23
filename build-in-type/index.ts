//  built-in data type : number, string, boolean, void, undefine, null

let userId: number;
let id;

let firstName: string;
let lastName: string;
let fullName: string;
let isActive: boolean;

userId = 10;
id = 1254;
firstName = "Tariqul Islam";
lastName = " tarek";
isActive = true;

fullName = firstName.concat(lastName);
console.log(
  `your number is: ${userId} and your name is: ${fullName} account: ${isActive} ID: ${id}`
);
console.log(fullName.split(" "));
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

function display() : void{
  console.log("hi I am tareq");
}
display()