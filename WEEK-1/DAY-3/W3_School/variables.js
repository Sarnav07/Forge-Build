//let , constant 

let x=5
let y=6
let z=x+y

{/* <script>
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("demo").innerHTML = "The value of z is " + z;
</script> */}


{/* <script>
let _x = 2;
let _100 = 5;

document.getElementById("demo").innerHTML = _x + _100;
</script> */}

{/* <script>
let $$$ = 2;
let $myMoney = 5;

document.getElementById("demo").innerHTML = $$$ + $myMoney;
</script> */}

let carName = "Volvo";

{/* <script>
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

document.getElementById("demo").innerHTML = "The total is: " + total;
</script> */}

{/* <script>
const pi = 3.14;
let person = "John Doe";
let answer = 'Yes I am!';

document.getElementById("demo").innerHTML = pi + "<br>" + person + "<br>" + answer;
</script> */}

{/* <script>
let x = "John" + " " + "Doe";

document.getElementById("demo").innerHTML = x;
</script>  : John Doe */}

{/* <script>
let x = "5" + 2 + 3;

document.getElementById("demo").innerHTML = x;
</script> : 523 */}

{
  let x = 2;
}
// x can NOT be used here

{
  var a = 2;
}
// a CAN be used here

var b = "John Doe";

var b = 0;

var c = 10;
// Here c is 10

{
var c = 2;
// Here c is 2
}

// Here c is 2

const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");

// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";

const d = 10;
// Here d is 10

{
const d = 2;
// Here d is 2
}

// Here d is 10

// String	A text of characters enclosed in quotes
// Number	A number representing a mathematical value
// Bigint	A number representing a large integer
// Boolean	A data type representing true or false
// Object	A collection of key-value pairs of data
// Undefined	A primitive variable with no assigned value
// Null	A primitive value representing object absence
// Symbol	A unique and primitive identifier