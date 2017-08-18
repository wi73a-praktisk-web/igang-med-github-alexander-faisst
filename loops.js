/* var cars = ["Volvo", "Opel", "Mercedes", "BMW", "Citroen", "Audi", "Skoda"];
cars.name = "alle bilerne";
cars[10] = "Ford";

//for_loops
for (i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (var item of cars) {
    console.log(item);
}

//forEach_loops
cars.forEach(function (item) {
    console.log(item)
});

function logEachItem(item, index, array) {
    console.log('cars[' + index + '] = ' + item);
}

cars.forEach(logEachItem);

//while_loops

var j = 0;
while (j <= 50) {
    console.log("j = " + j);
    j++;
}


 */

// ---------------------------------------- RNG'enerator ---------------------------------------

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// -------------------------------------------------------------------------------------------------

 //-------------------------------------------- DEL 1 --------------------------------------------------------

//Øvelse 1
 var i = -10;
 do{
     console.log("++i = " + ++i)
 }while(i <= 10);

 //Øvelse 2
 var i = 1;
 while(i <= 25){
     console.log("i = " + i);
     i++;
 }

 for(i = 0; i <= 25; i++){
     console.log("i = " + i);
 }

 var j = 1;
 do{
     console.log("i = " + j)
     j++;
 }while(j <= 25);

 //Øvelse 3

 for(i = 2017; i >= 1917; i--){
     console.log("i = " + i);
 }

 //Øvelse 4

//se markdown

 //------------------------------------------ DEL 2 --------------------------------------------------

 //Øvelse 1.1

 var names = ["Anders Mattesen","Mikkel Svendsen","Laura Hansen", "Maria Andersen", "Oliver Efternavn", "Niels JegLøberTørForIdeer", "Harald HvorMangeNavneErJegOppePå", "Sofie OkJegSkalBrugeEtMere"];

 //Øvelse 1.2
names.forEach(function(name, index){
    console.log(index + ' ' + name);
 });

 //Øvelse 2.1 + 2.2
var artists = ["Michael Jackson","Elvis Presley","Ozzy Ozbourne", "Chester Bennington"];
artists.forEach(function(artist, index){
    console.log(index + ' ' + artist);
});

//Øvelse 3.1
var numbers = [];
for(i = 0; i <= 10; i++){
    numbers.push(getRandomInt(0,100));
    console.log("numbers[" + i + "] = " + numbers[i]);
}

console.dir(numbers);

//Øvelse 3.2 + 3.3 (2 solutions, both work deliciously)

//-------------------------------- ANONYMOUS FUNCTION INSIDE FOR EACH LOOP ---------------------------

numbers.forEach(function(number, index){
    var x = numbers[index + 1];
    if(numbers[index] > x){
        console.log("numbers[index] = " + numbers[index]);
        console.log("x = " + x);
        console.log("the next item is smaller than this one ");
    }
    else if(numbers[index] === x){
        console.log("numbers[index] = " + numbers[index]);
        console.log("x = " + x);
        console.log("they are both equal");
    }
    else if(numbers[index] < x){
        console.log("numbers[index] = " + numbers[index]);
        console.log("x = " + x);
        console.log("the next item is bigger than this one ");
    }
});

// -------------------------------------------- FUNCTION DEFINED EXTERNALLY AND THEN CALLED ------------------------

function checkSmallerOrBigger(number, index){
    var x = numbers[index + 1];
    if(numbers[index] > x){
        console.log("numbers[index] = " + numbers[index]);
        console.log("x = " + x);
        console.log("the next item is smaller than this one ");
    }
    else if(numbers[index] === x){
        console.log("numbers[index] = " + numbers[index]);
        console.log("x = " + x);
        console.log("they are both equal");
    }
    else if(numbers[index] < x){
        console.log("numbers[index] = " + numbers[index]);
        console.log("x = " + x);
        console.log("the next item is bigger than this one ");
    }
}

numbers.forEach(checkSmallerOrBigger);