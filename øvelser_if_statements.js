/*

var i = -100;
while(i <= 99){
    if(i <= 0){
        console.log("i is less than 0" + i);
    }
    else if(i === 0){
        console.log("i is 0" + i);
    }
    else if(i >= 0){
        console.log("i is bigger than 0" + i);
    }
    else 
    {
        console.log("there was a mistake" + i);
    }
    i++;
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

//Øvelse 1.1

var check = true;

//Øvelse 1.2
if(check){
    console.log("hej verden");
}

//Øvelse 1.3
check = false;
if(check){
    console.log("hej verden");
}

//Øvelse 2.1
var x = getRandomInt(0,10);

//Øvelse 2.2
console.log(getRandomInt(0,10));

//Øvelse 2.3
var x = getRandomInt(0,10);
if(x < 5){
    console.log("x is smaller than 5 = " + x);
}
else if(x == 5){
    console.log("x is exactly 5 = " + x);
}
else if(x > 5){
    console.log("x is bigger than 5 = " + x);
}
else 
{
    console.log("something went wrong = " + x);
} 

//Øvelse 3
var x = getRandomInt(0,10);
var result = x > 5 ?  'x is bigger than 5 = ' + x : x < 5 ? 'x is smaller than 5 = ' + x : x == 5 ? 'x is exactly 5 = ' + x :'something wrong'+ x ;
console.log(result);

//Øvelse 4 
var drik = "faxe_kondi";
if(drik === "faxe_kondi"){
    console.log("lækkert!");
}
else if(drik == "coca_cola"){
    console.log("det kan vel gå an...");
}
else if(drik == "grapefrugt_juice"){
    console.log("bvadr, undrinkable, fy for fanden da!?");
}
else{
    console.log("ERROR ERROR ERROR");
}

//Øvelse 5 
/* var name = "Egon";
switch (name) {
   case "Egon":
      console.log('Han har en plan');
      break;
   case "Finn":
      console.log('Ønsker medvind på cykelstierne');
      break;
   case "Georg":
      console.log('Får en lys ide');

   case "Hjælper":
      console.log(' er lille');
      break;
   default:
      console.log('ukendt');
      break;
} */

var drik = "faxe_kondi";
switch(drik) {
    case "faxe_kondi" :
        console.log("det kan vel gå an...");
        break;
    case "coca_cola" : 
        console.log("det kan vel gå an...");
        break;
    case "grapefrugt_juice" : 
        console.log("bvadr, undrinkable, fy for fanden da!?");
        break;
    default : 
        console.log("ERROR ERROR ERROR");
        break;
}

