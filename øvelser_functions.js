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
var y = 20;
var result;

function add(n,m){
    result = n + m;
    console.log("result = " + result);
}
function subtract(n,m){
    result = n - m;
    console.log("result = " + result);
}
function divide(n,m){
    result = n /m;
    console.log("result = " + result);
}
function multiply(n,m){
    result = n * m;
    console.log("result = " + result);
}
function pi(){
    //what am i even gonna do here? (Math.PI, but what am i gonna use it for in this instance?)
}
function sqrRt(m){
    result = Math.sqrt(m);
    console.log("result = " + result);
}