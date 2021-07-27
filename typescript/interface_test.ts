interface Square {
    side: Number;
    message?: String;
}

interface EasyGoingSquare extends Square {
    [propName: string]: any;
}

var square1: Square = {message: "Hey moe", side: 10};
var square2: Square = {side: 10};
// Fails because foo undergoes excess type check
// var square3: Square = {side: 5, chicken: "Foghorn"}

// To get around this 
var square4: EasyGoingSquare = {side: 5, chicken: "Foghorn"}



console.log(square2);
console.log("Hey"); 