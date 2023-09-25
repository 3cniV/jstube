// var num = 2;

// function sayMe(){
//     console.log("Say me");
// }

// // there is a global and execution context
// // Execution Context : 1.Variable Object, 2.Scope Chain, 3.this
// // execution context has two rules: Function declarations are scanned and made available, Variable declarations are made available and made undefined

// sayMe()

tipper("80")

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

var bigTipper = function (a){
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("200")

console.log(name);
var name = "Vincent";

function sayName() {
    var name = "Mr. V";
    console.log(name);
}
sayName();

console.log(name);
