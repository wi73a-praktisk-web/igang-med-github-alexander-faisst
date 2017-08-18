//Øvelse 1.A

var firstName = "Alex";
var surName = "Faisst";
var birthDay = "04.11.1992";

function print(fornavn, efternavn, fDag) {
    console.log("My name is " + fornavn + ' ' + efternavn + " and my birthday is the " + fDag);
}

print(firstName, surName, birthDay);

//Øvelse 1.B
var x = 10;
var result = 0;

var add = n => console.log("result = " + (result += n));
var subtract = n => console.log("result = " + (result -= n));
var divide = n => console.log("result = " + (result /= n));
var multiply = n => console.log("result = " + (result *= n));
var sqRt = n => console.log("result = " + Math.sqrt(result));

add(x);
subtract(x);
divide(x);
multiply(x);
sqRt();

//Øvelse 2
var output;
var s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum libero nec ante tristique";
var n = 0, m = 10;

var substring = (s, n, m) => s.length >= m ? console.log(s.substr(n, m)) : console.log("the string is shorter than the 'end' index");
var split = s => console.log(s.split(" ")); //... could also split at commas or anything else
var slice = (s, n, m) => console.log(s.split(n, m)); //"end" is up to but not including, so this one can't really fail, as opposed to substring

substring(s, 0, 10);
split(s);
slice(s, n, m);

//Øvelse 3.1 - 3.4
var profile = p => console.log(p[0] + " " + p[1] + "\n" + " er født i " + p[2] + "\n" + " og er " + (new Date().getFullYear() - p[2]) + " år gammel");
profile(["Alexander", "Faisst", 1992]);

//Ekstra udfordringer A
var profile = function (p = data,n = null) {
    var result = "";
    if (n || n === 0) {
        p[n].forEach(function (item, i) {
            if (structure[i] === "Age") {
                result += structure[i] + ": " + (new Date().getFullYear() - parseInt(p[n][2].substring(6, 9))) + ",\n";
            }
            else {
                result += structure[i] + ": " + item + ",\n";
            }
        });
    }
    else {
        p.forEach(function (item) {
            item.forEach(function (element, j) {
                if (structure[j] === "Age") {
                    result += structure[j] + ": " + (new Date().getFullYear() - parseInt(item[2].substring(6, 11))) + ",\n";
                }
                else {
                    result += structure[j] + ": " + element + ",\n";
                }

            });
            result += "\n"
        });
    }
    console.log(result);
}
var structure = ["Fornavn", "Efternavn", "Birthday", "Age", "E-mail", "Phone", "Adress"];
var data = [
    ["Alexander", "Faisst", "04.11.1992", "alexander@faisst.dk", "23293377", "Englandsvej 34B 3Th 2300 kbh"],
    ["Brian", "Olsen", "05.12.1995", "bo@hotmail.com", "31353849", "Gadenavn 1 1234 Bynavn"],
    ["Hanne", "Simonsen", "12.03.1991", "hs@yahoo.com", "12345678", "Gadenavn 1 1234 Bynavn"],
    ["Lisa", "Andersen", "17.08.1989", "la@gmail.com", "87654321", "Gadenavn 1 1234 Bynavn"]];

profile(data, 0);

//Dage Til Jul

var start = new Date("January 1, 2017"), end = new Date(), diff = 0, days = 1000 * 60 * 60 * 24;
diff = end - start; 
console.log(Math.floor(diff/days) + " days have passed since the beginning of the year, and there's " + (365 - Math.floor(diff/days)) + " days to christmas");

//console.log(Math.floor((new Date() - new Date("January 1, 2017")) / (1000 * 60 * 60 * 24)) + " days have passed since the beginning of the year.");