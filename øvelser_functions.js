/* function add(n){
    result += n;
    console.log("result = " + result);
}
function subtract(n){
    result -= n;
    console.log("result = " + result);
}
function divide(n){
    result /= n;
    console.log("result = " + result);
}
function multiply(n){
    result *= n;
    console.log("result = " + result);
}
function pi(){
    //what am i even gonna do here? (Math.PI, but what am i gonna use it for in this instance?)
}
function sqrRt(){
    result = Math.sqrt(result);
    console.log("result = " + result);
} */


//Øvelse 1.A

var firstName = "Alex";
var surName = "Faisst";
var birthDay = "04.11.1992";

function print (fornavn, efternavn, fDag) {
    console.log("My name is " + fornavn + ' ' + efternavn + " and my birthday is the " + fDag);
}

print(firstName,surName,birthDay);

//Øvelse 1.B
var x = 10;
var result = 0;

var add = n => console.log("result = " + (result += n));
var subtract = n => console.log("result = " + (result -= n));
var divide = n => console.log("result = " + (result /= n));
var multiply = n => console.log("result = " + (result *= n));
var sqRt = n => console.log("result = " + Math.sqrt(result));

add(x);
subtract(x);
divide(x);
multiply(x);
sqRt();

//Øvelse 2
var output;
var s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum libero nec ante tristique";
var n = 0;
var m = 10;

var substring = (s,n,m) => console.log(s.substring(n,m));
var split = s => console.log(s.split(" ")); //... could also split at commas or anything else
var slice = (s,n,m) => console.log(s.split(n,m));

substring(s,0,10);
split(s);
slice(s,n,m);