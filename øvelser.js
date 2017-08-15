//Øvelse 1.1 
var navn = "Alex";

//Øvelse 1.2 

var alder = "24";

//Øvelse 1.3 

var tekst = `Mit navn er ${navn} og jeg er ${alder} år gammel`;

// Øvelse 1.4 

console.log("tekst = " + tekst);

//Øvelse 2.1 

var moms = 1.25;

//Øvelse 2.2 

var pris_uden_moms = 400;

//Øvelse 2.3 

var pris_med_moms = pris_uden_moms * moms;

//Øvelse 2.4 

console.log("pris_med_moms = " + pris_med_moms);

//Øvelse 2.5 

var pris_uden_moms_02 = pris_med_moms/moms;

//Øvelse 2.6

console.log("pris_uden_moms_02 = " + pris_uden_moms_02);

//Øvelse 3.1

var forste = 10;
console.log("forste = " + forste);
//Øvelse 3.2

var anden = 20;
console.log("anden = " + anden);

//Øvelse 3.3

var tredje = forste;
forste = anden;
anden = tredje;

//Øvelse 3.4

console.log("forste = " + forste);
console.log("anden = " + anden);

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

//Øvelse 5.1

/* 
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p> 

    <script>
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars;
    </script>

    </body>
    </html>
*/


//Øvelse 5.2

/* 
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p> 

    <script>
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars[1];
    </script>

    </body>
    </html>
*/

//Øvelse 5.3

/*
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p> 

    <script>
    var cars = ["Opel", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars;
    </script>

    </body>
    </html>
*/

//Øvelse 5.4

/* 
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p> 

    <script>
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo").innerHTML = cars.length;
    </script>

    </body>
    </html>
*/

//Øvelse 5.5

/*
    <!DOCTYPE html>
    <html>
    <body>

    <p id="demo"></p> 

    <script>
    var cars = ["Saab", "Volvo", "BMW"];
    cars[cars.length] = "Mercedes";
    document.getElementById("demo").innerHTML = cars;
    </script>

    </body>
    </html>
*/

//Øvelse 6.1,6.2 & 6.3
var navne = ["Alex Faisst", "Peter Hansen", "Malte Mulbjerg", "Jesper Rasmussen", "Sofie Nielsen", "Rita Andersen"];
var fodselsdage = ["03,05,1991","17,11,1995","21,07,1776","16,05,1994","22,06,1996","27,09,1998"];
var bynavne = ["København","Odense","Aarhus","Frederiksværk","Roskilde", "Holbæk"];
var personer = [navne, fodselsdage, bynavne];

console.log(personer);