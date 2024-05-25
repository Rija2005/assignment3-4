//chapter3
//question1

// let age =15;
// alert ("Iam"+15+"years old");

// //question2
// let visit="14 times";
// alert("You have vsit this site"+ visit)

// //question3// 
// let birthYear = 2005; 

// let message = `I am writing JavaScript code inside a script file, and I was born in ${birthYear}.`;
// document.getElementById("birthYearMessage").textContent = message;

// //question4
// let visitorName = "John Doe";
// let product = "5-Tshirts";
// document.getElementById(visitorName + "ordered" + product + "from xyz clothing store");


//chapter4
//question1
// let firstName = "John", lastName = "Doe", age = 30;
// console.log(firstName+lastName+age);
//question2
// Legal variable names
let firstName = "John";
let _age = 25;
let $price = 100.50;
let totalAmount = 250;
let user2 = "Jane Doe";

// Illegal variable names (will cause syntax errors if uncommented)
// let 2user = "John";
// let first-name = "Doe"; 
// let total amount = 300; /
// let let = "keyword";
// let @price = 150; 

//question3
document.getElementById("heading").textContent = "Rules for naming JS variables";

const rules = "Variable names can only contain letters, numbers, underscores, and dollar signs.";
document.getElementById("rules").textContent = rules;


const beginning = "Variables must begin with a letter, underscore (_), or dollar sign ($). For example $name, _name, or name.";
document.getElementById("beginning").textContent = beginning;

const caseSensitive = "Variable names are case sensitive.";
document.getElementById("caseSensitive").textContent = caseSensitive;

const reserved = "Variable names should not be JS reserved keywords.";
document.getElementById("reserved").textContent = reserved;





