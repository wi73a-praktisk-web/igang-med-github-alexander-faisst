//Create an array named cars, assign the values "Saab", "Volvo" and "BMW" to it, and display it.
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

//Display the "Volvo" item of the cars array.
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
//Change the first item of cars to "Opel" by referring to the index number, and display the whole array
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

//Use the length property to display the number of array items in cars.
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

//Use the length property to add a new item to cars: Mercedes.
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

/* 

1 - Opret et array i variablen <personer>,  som indeholder minimum 3 andre arrays.

2 - De 3 arrays skal indeholde to oplysninger:
    fornavn og efternavn  (bare vælg nogle tilfældige navne i første omgang)
    Udskriv <personer> variablen i konsollen.


3 - Hvis strukturen ser korrekt ud, så ret og tilføj navnene, så dine inderste arrays indeholder navnene på mimimum 2 elever fra hvert hold på din årgang, så i alt 6 elever. */
//Øvelse 6.1,6.2 & 6.3

var navne = ["Alex Faisst", "Peter Hansen", "Malte Mulbjerg", "Jesper Rasmussen", "Sofie Nielsen", "Rita Andersen"];
var fodselsdage = ["03,05,1991","17,11,1995","21,07,1776","16,05,1994","22,06,1996","27,09,1998"];
var bynavne = ["København","Odense","Aarhus","Frederiksværk","Roskilde", "Holbæk"];
var personer = [navne, fodselsdage, bynavne];

console.log(personer);