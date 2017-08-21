//source: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
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

 //med en do-while, lav en løkke der altid udføres mindst 1 gang eller indtil en tælle variabel er nået til en bestemt værdi
//Øvelse 1
 var i = -10;
 do{
     console.log("++i = " + ++i)
 }while(i <= 10);

 //benyt en løkke til at udskrive alle tallene fra 1 til og med 25 løs opgaven 3 gange, en med hver af løkkerne vi har været igennem nu
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

 //benyt en for-løkke til at udskrive alle år fra 2017 og ned til 1917, i den faldende rækkefølge
 //Øvelse 3

 for(i = 2017; i >= 1917; i--){
     console.log("i = " + i);
 }

 //benyt markdown til at beskrive hvordan en for-løkke fungerer, husk at få alle tegn med.
 //Øvelse 4

//se markdown

 //------------------------------------------ DEL 2 --------------------------------------------------

 //opret et array med 8 navne
 //Øvelse 1.1

 var names = ["Anders Mattesen","Mikkel Svendsen","Laura Hansen", "Maria Andersen", "Oliver Efternavn", "Niels JegLøberTørForIdeer", "Harald HvorMangeNavneErJegOppePå", "Sofie OkJegSkalBrugeEtMere"];

 //med en forEach skal du løbe igennem array'et og udskrive hvert navn.
 //Øvelse 1.2
names.forEach(function(name, index){
    console.log(index + ' ' + name);
 });

 // 1 - opret et nyt array, denne gang med 4 forskellige musikkere/kunstnere
 // 2 - udskriv alle navn, samt hvilken position navnet har i arrayet.
 //Øvelse 2.1 + 2.2
var artists = ["Michael Jackson","Elvis Presley","Ozzy Ozbourne", "Chester Bennington"];
artists.forEach(function(artist, index){
    console.log(index + ' ' + artist);
});

//opret et array med 10 tilfældige tal du selv vælger.
//Øvelse 3.1
var numbers = [];
for(i = 0; i <= 10; i++){
    numbers.push(getRandomInt(0,100));
    console.log("numbers[" + i + "] = " + numbers[i]);
}

console.dir(numbers);

// 2 - løb igennem arrayet med en forEach og for hvert element skal du udskrive om elementets værdi er større eller mindre end det næste element i arrayet.
// 3 - tag højde for om der findes et næste element
// OBS OBS OBS - mangler a checke for om der er en næste!!!
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