
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