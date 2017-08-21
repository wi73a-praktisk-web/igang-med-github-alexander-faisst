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
 
//opret to variabler med to forskellige tal værdier
//Øvelse 1.1

var forste = 2; 
var anden = 10;

console.log("første = " + forste + " anden = " + anden);

//console.log resultatet af at lægge de to variabler sammen, benyt +
//Øvelse 1.2

console.log("første + anden = " + (forste + anden));

//console.log resultatet af af at trække dem fra hinanden, benyt -
//Øvelse 1.3

console.log("første - anden = " + (forste-anden));
console.log("anden - første = " + (anden - forste));

//console.log resultatet af at gange dem med hinanden, benyt *
//Øvelse 1.4

console.log("første * anden =" + (forste * anden));

//console.log resultatet af at dividere dem med hinanden, benyt /
//Øvelse 1.5 

console.log("første / anden = " + (forste/anden));
console.log("anden / første = " + (anden/forste));

//console.log hvor mange hele gange den første variabel går op i den anden variabel, benyt modulus %
//Øvelse 1.6

console.log("første % anden = " + (forste%anden));
console.log("anden % første = " + (anden%forste));

//console.log den første variabel, efter du har lagt 1 til med ++ operatoren.
//Øvelse 1.7

console.log("++første = "  +(++forste));

//console.log den anden variabel, efter du har trukket 1 fra med -- operatoren.
//Øvelse 1.8

console.log("--første = " + (--forste));

/* 
1 - opret en variabel med et valgfrit tal
2 - opret en anden variabel med et andet valgfrit tal
3 - lav 5 eksempler, hvor du skriver det som det står under Example i tabellen med operatorerne:
 */
//Øvelse 2.1, 2.2 & 2.3
for(i = 0;  i < 5; i++){
    var x = getRandomInt(0,50);
    var y = getRandomInt(0,50);
    console.log("x = " + x);
    console.log("y = " + y);
    console.log("x += y = " + (x+=y));
}
 
// opret en if sætning der kræver 2 betingelser er opfyldt, du må gerne benytte variabler så du kan afprøve med forskellige værdier. 
// betingelserne kunne være 2 variabler med tal, hvor f.eks. det ene er mindre en 10 og det andet større en 10
//Øvelse 3

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
}

//Gør som i øvelse 3, men denne gang skal bare 1 af betingelserne være opfyldt.
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

//Benyt markdown til kort at beskrive hvad hver af de følgende operatoerer gør, kom med et eksempel på hvor hver af operatorene kan benyttes.
//Øvelse 5 - se readme.md
/* 
=
==
===
!
!=
!==
<
>
<=
>=
+
-
*
/
%
&&
||
 */