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
/* 

//Øvelse 1.1

var forste = 2; 
var anden = 10;

console.log("første = " + forste + " anden = " + anden);

//Øvelse 1.2

console.log("første + anden = " + (forste + anden));

//Øvelse 1.3

console.log("første - anden = " + (forste-anden));
console.log("anden - første = " + (anden - forste));

//Øvelse 1.4

console.log("første * anden =" + (forste * anden));

//Øvelse 1.5 

console.log("første / anden = " + (forste/anden));
console.log("anden / første = " + (anden/forste));

//Øvelse 1.6

console.log("første % anden = " + (forste%anden));
console.log("anden % første = " + (anden%forste));

//Øvelse 1.7

console.log("++første = "  +(++forste));

//Øvelse 1.8

console.log("--første = " + (--forste));

//Øvelse 2

for(i = 0;  i < 5; i++){
    var x = getRandomInt(0,50);
    var y = getRandomInt(0,50);
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("x += y = " + (x+=y));
}
 */
/* //Øvelse 3

for(i = 0;  i < 5; i++){
    var x = getRandomInt(0,50);
    var y = getRandomInt(51,100);
    if((x >= 0 && x <= 50) && (y >= 51 && y <= 100)){
        console.log("checks out")
    }
    else if((x <= 0 && x >= 50) || (y <= 51 && y >= 100)){
        console.log("not so much")
    }
    else{
        console.log("breaking down crying, hopefully this point should never be reached though")
    }
} */

//Øvelse 4

for(i = 0;  i < 5; i++){
    var x = getRandomInt(0,50);
    var y = getRandomInt(51,100);
    if((x >= 0 && x <= 50) || (y >= 51 && y <= 100)){
        console.log("checks out")
    }
    else if((x <= 0 && x >= 50) || (y <= 51 && y >= 100)){
        console.log("not so much")
    }
    else{
        console.log("breaking down crying, hopefully this point should never be reached though")
    }
}