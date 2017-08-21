//Læg et navn ned i variablen <navn>.
//Øvelse 1.1 
var navn = "Alex";

//Læg en alder ned i variablen <alder>.
//Øvelse 1.2 
var alder = "24";

//Definér variablen <tekst> som en string, der indeholder teksten:
//Mit navn er <navn> og jeg er <alder> år gammel.
//Navnet og alderen i teksten skal komme fra dine variabler.
//Øvelse 1.3 
var tekst = `Mit navn er ${navn} og jeg er ${alder} år gammel`;

//Udskriv <tekst> variablen i konsollen.
// Øvelse 1.4 
console.log(tekst);

//Læg tallet 1.25 ned i variablen <moms>.
//Øvelse 2.1 
var moms = 1.25;

//Læg tallet 400 ned i variablen <pris_uden_moms>.
//Øvelse 2.2 
var pris_uden_moms = 400;

//Definér variablen variablen <pris_med_moms> ved at gange <pris_uden_moms> med <moms>.
//Øvelse 2.3 
var pris_med_moms = pris_uden_moms * moms;

//Udskriv <pris_med_moms> variablen i konsollen.
//Øvelse 2.4 
console.log("pris_med_moms = " + pris_med_moms);

//Definér variablen <pris_uden_moms_02> ved at dividere <pris_med_moms> med <moms>.
//Øvelse 2.5 
var pris_uden_moms_02 = pris_med_moms/moms;

//Udskriv <pris_uden_moms_02> variablen i konsollen.
//Øvelse 2.6
console.log("pris_uden_moms_02 = " + pris_uden_moms_02);

//På linje 1 i koden, læg tallet 10 ned i variablen <forste>.
//Øvelse 3.1
var forste = 10;
console.log("forste = " + forste);

//På linje 2 i koden, læg tallet 20 ned i variablen <anden>.
//Øvelse 3.2
var anden = 20;
console.log("anden = " + anden);

//Du skal nu skrive noget kode, som gør, at variablernes værdier bytter plads, dvs. at <forste> kommer til at indeholde 20, mens <anden> kommer til at indeholde 10.
//Du må IKKE skrive flere tal i koden efter linje 2  -  Dvs., efter linje 2 må du ikke bare sætte <forste> til 20  eller  5 * 4, osv. Det ville være snyd ;)
//Øvelse 3.3
var tredje = forste;
forste = anden;
anden = tredje;

//Udskriv variablerne <forste> og <anden> i konsollen.
//Øvelse 3.4
console.log("forste = " + forste);
console.log("anden = " + anden);

//Create a variable called carName, assign the value "Volvo" to it, and display it.
//Øvelse 4.1

/*
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo">Display the result here.</p> 

    <script>
    var carName = "Volvo";
    document.getElementById("demo").innerHTML = carName;
    </script>

    </body>
    </html>
*/

//Create a variable called number, assign the value 50 to it, and display it.
//Øvelse 4.2 

/* 
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo">Display the result here.</p> 

    <script>
    var number = 50;
    document.getElementById("demo").innerHTML = number;
    </script>

    </body>
    </html>
*/ 

//The code below should display "Volvo" - Fix it.
//Øvelse 4.3

/*
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo">Display the result here.</p> 

    <script>
    var carName = "Volvo";
    document.getElementById("demo").innerHTML = carName;
    </script>

    </body>
    </html>
*/

//Display the sum of 5 + 10, using two variables x and y.
//Øvelse 4.4

/* 
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo">Display the result here.</p> 

    <script>
    var x = 5;
    var y = 10;
    document.getElementById("demo").innerHTML = x + y;
    </script>

    </body>
    </html>
*/

//Create a third variable called z, assign x + y to it, and display it.
//Øvelse 4.5

/*
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo">Display the result here.</p> 

    <script>
    var x = 5;
    var y = 10;
    var z = x + y;
    document.getElementById("demo").innerHTML = z;
    </script>

    </body>
    </html>
*/


// Use a single var keyword to create three variables with the following values:
// firstName = "John"
// lastName = "Doe"
// age = 35
//Øvelse 4.6

/*
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo">Display the result here.</p> 

    <script>
    var firstName = "John", lastName = "Doe", age = 35;

    document.getElementById("demo").innerHTML = 
    firstName + " " + lastName + " is " + age;
    </script>

    </body>
    </html>
*/