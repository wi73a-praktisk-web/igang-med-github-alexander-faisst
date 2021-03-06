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

//opret en boolean variabel, med værdien true
//Øvelse 1.1

var check = true;

//skriv en betinget sætning der console-logger 'hej verden' hvis variablens værdi er sand
//Øvelse 1.2
if(check){
    console.log("hej verden");
}

//ret variablens værdi til false og se om der logges i konsollen.
//Øvelse 1.3
check = false;
if(check){
    console.log("hej verden"); //der logges ikke
}

//opret en variabel og tildel den et tilfældigt tal mellem 0 og 10
//Øvelse 2.1
var x = getRandomInt(0,10);

//udskriv variablens værdi med en console.log
//Øvelse 2.2
console.log(getRandomInt(0,10));

//3. opret en if-sætning der udskriver 'højere end 5' hvis variablens værdi er højere end 5
//4. tilføj en else-blok til if-sætningen, hvor der udskrives 'lavere end 5'
//Øvelse 2.3 + 2.4
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

//Løs samme problem som i øvelse 2, men benyt en ternary operator i stedet for if - else
//Øvelse 3
var x = getRandomInt(0,10);
var result = x > 5 ?  'x is bigger than 5 = ' + x : x < 5 ? 'x is smaller than 5 = ' + x : x == 5 ? 'x is exactly 5 = ' + x :'something wrong'+ x ;
console.log(result);


/* 
1 - opret en variabel med navnet på din favorit læskedrik
2 - opret en if - else if - else struktur hvor du udskriver en selvvalgt tekst, alt efter hvad variablen indeholder.
3 - lav mindst 2 else if blokke 
*/
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

//Løs øvelse 4, men benyt switch - case istedet
//Øvelse 5 
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

//Benyt markdown til at beskrive hvordan en if-else sætning fungerer i praksis. Sørg samtidig for at beskrive alle de tegn der skal benyttes i if-else strukturen.
//Øvelse 6 - se readme.md