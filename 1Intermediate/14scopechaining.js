var name = "Vincent";

console.log("Line number 3", name);

function sayName(){
    var name = "Mr. V";
    console.log("Line number 6", name);
sayNameTwo();

    function sayNameTwo() {
        var name = "Mr. VT";
        console.log("Line number 12", name);
    }
}

sayName();